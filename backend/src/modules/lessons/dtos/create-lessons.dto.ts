import { IsString } from 'class-validator';

export class CreateLessonDto {
  @IsString()
  title!: string;

  @IsString()
  content!: string;

  @IsString()
  description!: string;

  @IsString()
  courseId!: string;
}
