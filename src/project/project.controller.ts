import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('/add')
  create(@Body() data: CreateProjectDto) {
    return this.projectService.create(data);
  }

  @Get('/getAll')
  findAll() {
    return this.projectService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(+id);
  }

  @Post('/update/:id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(+id, updateProjectDto);
  }

  @Post('/delete/:id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(+id);
  }
}
