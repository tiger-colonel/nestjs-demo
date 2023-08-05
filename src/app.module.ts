import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { APP_GUARD } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { transportFile } from './common/logger/logger.transport';
import envConfig from './config';
import { JwtGuard } from './auth/jwt.guard';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [envConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        ({
          type: 'mysql',
          entities: [
            'dist/**/*.entity{.ts,.js}',
            'dist/**/**/*.entity{.ts,.js}',
          ],
          ...config.get('mysql'),
        } as TypeOrmModuleOptions),
    }),
    WinstonModule.forRoot({
      transports: [transportFile],
    }),
    ProjectModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
})
export class AppModule {}
