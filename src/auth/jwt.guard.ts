import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { BusinessException } from '@/common/exceptions/business.exception.filter';
import { catchError, lastValueFrom, throwError } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class JwtGuard {
  constructor(private reflector: Reflector, private httpService: HttpService) {}

  async canActivate(context: ExecutionContext) {
    const loginAuth = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (loginAuth) {
      return true;
    }

    const req = context.switchToHttp().getRequest();
    const token = req.cookies?.['RBAC_TOKEN'];
    if (!token) {
      throw new BusinessException('无权限访问');
    }
    const user = await this.getNeteaseUserInfo(token);
    req.user = user;
    return true;
  }

  async getNeteaseUserInfo(token: string) {
    const res = await lastValueFrom<{ data?: any }>(
      this.httpService
        .get('', {
          headers: {
            'X-Rbac-Token': token,
            'Content-type': 'application/json',
            Accept: 'text/plain',
          },
        })
        .pipe(
          catchError((err) => {
            const { code, msg } = err?.response?.data;
            return throwError(
              () => new BusinessException({ code, message: msg }),
            );
          }),
        ),
    );
    if (!res?.data) {
      throw new BusinessException('用户不存在');
    }
    return res?.data;
  }
}
