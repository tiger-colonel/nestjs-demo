import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BusinessException } from './business.exception.filter';

@Catch(HttpException)
export class HttpExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    // 处理业务异常
    if (exception instanceof BusinessException) {
      const error = exception.getResponse();
      return response.status(HttpStatus.OK).send({
        data: null,
        status: error['code'],
        message: error['message'],
        success: false,
      });
    }
    // 非http标准 异常的处理
    return response.status(status).send({
      code: status,
      path: request.url,
      message: exception.getResponse(),
    });
  }
}
