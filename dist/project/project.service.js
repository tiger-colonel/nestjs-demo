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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_entity_1 = require("./entities/project.entity");
let ProjectService = exports.ProjectService = class ProjectService {
    constructor(projectManager) {
        this.projectManager = projectManager;
    }
    create(data) {
        return this.projectManager.save(project_entity_1.Project, data);
    }
    async findAll() {
        return this.projectManager.find(project_entity_1.Project);
    }
    findOne(id) {
        return this.projectManager.findOne(project_entity_1.Project, {
            where: { id },
        });
    }
    update(id, updateProjectDto) {
        return this.projectManager.save(project_entity_1.Project, {
            id: id,
            ...updateProjectDto,
            updateDate: new Date(),
        });
    }
    remove(id) {
        return this.projectManager.delete(project_entity_1.Project, id);
    }
};
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeorm_2.EntityManager])
], ProjectService);
//# sourceMappingURL=project.service.js.map