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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const role_enum_1 = require("../common/enum/role.enum");
const swagger_1 = require("@nestjs/swagger");
let UserEntity = exports.UserEntity = class UserEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: 'id' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'bigint' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: '名字' }),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: '中文名字' }),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], UserEntity.prototype, "fullname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: '组织架构' }),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], UserEntity.prototype, "dep", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: '用户邮箱' }),
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'email',
        default: '',
        length: 100,
        comment: '用户邮箱',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: '手机号' }),
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'phone',
        default: '',
        length: 20,
        comment: '用户手机号码',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: '工号' }),
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'no',
        default: '',
        length: 10,
        comment: '用户工号',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: '用户角色' }),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: role_enum_1.Role,
        default: role_enum_1.Role.Dev,
        comment: '用户角色: 0-超管;1-所有者;2-开发;3-访客',
    }),
    __metadata("design:type", Number)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, description: '创建时间' }),
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        name: 'create_date',
        comment: '创建时间',
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, description: '更新时间' }),
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        name: 'update_date',
        comment: '更新时间',
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "update_date", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('user')
], UserEntity);
//# sourceMappingURL=user.entity.js.map