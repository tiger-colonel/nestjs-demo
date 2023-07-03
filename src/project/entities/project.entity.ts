import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('project')
export class Project {
  @ApiProperty({ type: Number, description: 'id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: Number, description: '名字' })
  @Column({ length: 100 })
  name: string;

  @ApiProperty({ type: Number, description: '创建者' })
  @Column({ length: 100 })
  creator: string;

  @ApiProperty({ type: Date, description: '创建时间' })
  @CreateDateColumn({
    type: 'timestamp',
    name: 'create_date',
    comment: '创建时间',
  })
  createDate: Date;

  @ApiProperty({ type: Date, description: '更新时间' })
  @UpdateDateColumn({
    type: 'timestamp',
    name: 'update_date',
    comment: '更新时间',
  })
  updateDate: Date;
}
