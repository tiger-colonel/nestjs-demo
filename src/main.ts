import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { AllExceptionsFilter } from '@/common/exceptions/base.exception.filter';
import { HttpExceptionsFilter } from '@/common/exceptions/http.exception.filter';
import { TransformInterceptor } from '@/common/interceptor/transform.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionsFilter());
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(3000);
}
bootstrap();
