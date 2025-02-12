import { IsString, IsOptional, IsUUID, IsNumber, MaxLength } from 'class-validator';

export class UpdateCourseDto {
  @IsUUID()
  @IsOptional()
  teacherId?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsNumber()
  @IsOptional()
  rating?: number;

  @IsString()
  @IsOptional()
  logoImage?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsUUID()
  @IsOptional()
  categoryId?: string;

  @IsNumber()
  @IsOptional()
  discount?: number;
}
