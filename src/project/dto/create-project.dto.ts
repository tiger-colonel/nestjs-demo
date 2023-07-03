import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ description: '名称', required: true })
  @IsNotEmpty({ message: '名称不能为空' })
  @Length(1, 100, { message: '名称长度为1-10' })
  name?: string;

  @ApiProperty({ description: '上传者', required: true })
  @IsString({ message: '上传者必须为字符串' })
  creator?: string;
}
