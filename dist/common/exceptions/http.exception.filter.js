"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const business_exception_filter_1 = require("./business.exception.filter");
let HttpExceptionsFilter = exports.HttpExceptionsFilter = class HttpExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        if (exception instanceof business_exception_filter_1.BusinessException) {
            const error = exception.getResponse();
            return response.status(common_1.HttpStatus.OK).send({
                data: null,
                status: error['code'],
                message: error['message'],
                success: false,
            });
        }
        return response.status(status).send({
            code: status,
            path: request.url,
            message: exception.getResponse(),
        });
    }
};
exports.HttpExceptionsFilter = HttpExceptionsFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionsFilter);
//# sourceMappingURL=http.exception.filter.js.map