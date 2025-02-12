import { IsUUID } from 'class-validator';

export class CourseIdParamDto {
  @IsUUID()
  id!: string;
}
