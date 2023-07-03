"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transportFile = void 0;
const DailyRotateFile = require("winston-daily-rotate-file");
const winston = require("winston");
exports.transportFile = new DailyRotateFile({
    dirname: 'logs',
    filename: '%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '2m',
    maxFiles: '7d',
    format: winston.format.combine(winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }), winston.format.json()),
});
//# sourceMappingURL=logger.transport.js.map