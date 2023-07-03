"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const business_exception_filter_1 = require("../common/exceptions/business.exception.filter");
const rxjs_1 = require("rxjs");
const axios_1 = require("@nestjs/axios");
let JwtGuard = exports.JwtGuard = class JwtGuard {
    constructor(reflector, httpService) {
        this.reflector = reflector;
        this.httpService = httpService;
    }
    async canActivate(context) {
        const loginAuth = this.reflector.getAllAndOverride('isPublic', [
            context.getHandler(),
            context.getClass(),
        ]);
        if (loginAuth) {
            return true;
        }
        const req = context.switchToHttp().getRequest();
        const token = req.cookies?.['RBAC_TOKEN'];
        if (!token) {
            throw new business_exception_filter_1.BusinessException('无权限访问');
        }
        const user = await this.getNeteaseUserInfo(token);
        req.user = user;
        return true;
    }
    async getNeteaseUserInfo(token) {
        const res = await (0, rxjs_1.lastValueFrom)(this.httpService
            .get('http://rbac-dev.apps.danlu.netease.com/api/v1/web/users', {
            headers: {
                'X-Rbac-Token': token,
                'Content-type': 'application/json',
                Accept: 'text/plain',
            },
        })
            .pipe((0, rxjs_1.catchError)((err) => {
            const { code, msg } = err?.response?.data;
            return (0, rxjs_1.throwError)(() => new business_exception_filter_1.BusinessException({ code, message: msg }));
        })));
        if (!res?.data) {
            throw new business_exception_filter_1.BusinessException('用户不存在');
        }
        return res?.data;
    }
};
exports.JwtGuard = JwtGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector, axios_1.HttpService])
], JwtGuard);
//# sourceMappingURL=jwt.guard.js.map