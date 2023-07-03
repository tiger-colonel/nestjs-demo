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
exports.Project = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Project = exports.Project = class Project {
};
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: 'id' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Project.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: '名字' }),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Project.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: '创建者' }),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Project.prototype, "creator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, description: '创建时间' }),
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        name: 'create_date',
        comment: '创建时间',
    }),
    __metadata("design:type", Date)
], Project.prototype, "createDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, description: '更新时间' }),
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        name: 'update_date',
        comment: '更新时间',
    }),
    __metadata("design:type", Date)
], Project.prototype, "updateDate", void 0);
exports.Project = Project = __decorate([
    (0, typeorm_1.Entity)('project')
], Project);
//# sourceMappingURL=project.entity.js.map