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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const business_exception_filter_1 = require("../common/exceptions/business.exception.filter");
const typeorm_2 = require("@nestjs/typeorm");
let UserService = exports.UserService = class UserService {
    constructor(userRepository, httpService) {
        this.userRepository = userRepository;
        this.httpService = httpService;
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
    async findOneByNeteaseId(id) {
        return await this.userRepository.findOne({ where: { id } });
    }
    async findUsersByName(name) {
        return await this.userRepository.find({
            where: {
                name: (0, typeorm_1.Like)(`%${name}%`),
            },
        });
    }
    async register(token) {
        const neteaseUser = await this.getNeteaseUserInfo(token);
        if (!neteaseUser) {
            throw new business_exception_filter_1.BusinessException('用户不存在');
        }
        let user = await this.findOneByNeteaseId(neteaseUser.id);
        if (!user) {
            user = await this.userRepository.save({ ...neteaseUser });
        }
        return user;
    }
    async findAll() {
        return await this.userRepository.find({
            select: ['id', 'name', 'email'],
        });
    }
    async findWithPaging(page, limit) {
        return await this.userRepository.find({
            skip: (page - 1) * limit,
            take: limit,
            order: { id: 'DESC' },
            select: ['id', 'name', 'email', 'create_date', 'update_date'],
        });
    }
    async listCount() {
        return await this.userRepository.count();
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        axios_1.HttpService])
], UserService);
//# sourceMappingURL=user.service.js.map