import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    create(data: CreateProjectDto): Promise<CreateProjectDto & import("./entities/project.entity").Project>;
    findAll(): Promise<import("./entities/project.entity").Project[]>;
    findOne(id: string): Promise<import("./entities/project.entity").Project>;
    update(id: string, updateProjectDto: UpdateProjectDto): Promise<{
        updateDate: Date;
        name?: string;
        creator?: string;
        id: number;
    } & import("./entities/project.entity").Project>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
