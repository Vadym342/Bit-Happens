import { IsUUID } from 'class-validator';

export class LessonIdParamDto {
  @IsUUID()
  id!: string;
}
