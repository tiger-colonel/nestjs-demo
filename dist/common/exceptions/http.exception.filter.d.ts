import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class HttpExceptionsFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): any;
}
