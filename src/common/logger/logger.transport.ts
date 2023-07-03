import DailyRotateFile = require('winston-daily-rotate-file');
import * as winston from 'winston';

export const transportFile: DailyRotateFile = new DailyRotateFile({
  dirname: 'logs',
  filename: '%DATE%.log', // 取datePattern做为日志文件名
  datePattern: 'YYYY-MM-DD', // 按天轮换
  zippedArchive: true, // 压缩归档
  maxSize: '2m',
  maxFiles: '7d', // 日志保留一周
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.json(),
  ),
});
