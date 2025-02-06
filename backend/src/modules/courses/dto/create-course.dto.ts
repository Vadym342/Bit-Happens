import { IsString, IsOptional, IsUUID, IsNumber } from 'class-validator';

export class CreateCourseDto {
  @IsUUID()
  teacherId!: string;

  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsString()
  content!: string;

  @IsNumber()
  @IsOptional()
  rating?: number;

  @IsString()
  @IsOptional()
  logoImage?: string;

  @IsNumber()
  price!: number;

  @IsUUID()
  categoryId!: string;

  @IsNumber()
  @IsOptional()
  discount?: number;
}
