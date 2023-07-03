import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectEntityManager()
    private projectManager: EntityManager,
  ) {}
  create(data: CreateProjectDto) {
    return this.projectManager.save(Project, data);
  }

  async findAll() {
    return this.projectManager.find(Project);
  }

  findOne(id: number) {
    return this.projectManager.findOne(Project, {
      where: { id },
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.projectManager.save(Project, {
      id: id,
      ...updateProjectDto,
      updateDate: new Date(),
    });
  }

  remove(id: number) {
    return this.projectManager.delete(Project, id);
  }
}
