import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  ServiceUnavailableException,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    // 非http标准 异常的处理
    return response.status(HttpStatus.SERVICE_UNAVAILABLE).send({
      code: HttpStatus.SERVICE_UNAVAILABLE,
      path: request.url,
      message:
        exception.message ?? new ServiceUnavailableException().getResponse(),
    });
  }
}
