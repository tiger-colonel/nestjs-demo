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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const business_exception_filter_1 = require("../common/exceptions/business.exception.filter");
const swagger_1 = require("@nestjs/swagger");
const role_enum_1 = require("../common/enum/role.enum");
const decorators_1 = require("../common/decorators");
const roles_guard_1 = require("../auth/roles.guard");
let UserController = exports.UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    info(query) {
        return this.userService.findOneByNeteaseId(query.id);
    }
    async list(query) {
        return await this.userService.findUsersByName(query.name);
    }
    async deleteUser(id, user) {
        if (id === user.id) {
            throw new business_exception_filter_1.BusinessException('不能删除自己');
        }
        return true;
    }
};
__decorate([
    (0, common_1.Get)('info'),
    (0, swagger_1.ApiOperation)({ summary: '根据id查询用户信息' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "info", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiOperation)({ summary: '查询用户列表' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "list", null);
__decorate([
    (0, decorators_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/delete:id'),
    (0, swagger_1.ApiOperation)({ summary: '删除用户' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('用户账号'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map