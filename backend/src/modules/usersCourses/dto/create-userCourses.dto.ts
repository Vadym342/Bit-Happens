import { IsUUID, IsString } from 'class-validator';

export class CreateUserCourseDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  courseId: string;

  @IsString()
  status: string;
}
