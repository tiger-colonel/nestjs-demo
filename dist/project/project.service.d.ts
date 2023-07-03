import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { EntityManager } from 'typeorm';
import { Project } from './entities/project.entity';
export declare class ProjectService {
    private projectManager;
    constructor(projectManager: EntityManager);
    create(data: CreateProjectDto): Promise<CreateProjectDto & Project>;
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project>;
    update(id: number, updateProjectDto: UpdateProjectDto): Promise<{
        updateDate: Date;
        name?: string;
        creator?: string;
        id: number;
    } & Project>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
