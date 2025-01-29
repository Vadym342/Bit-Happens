import { IsNotEmpty, IsString, IsOptional, IsUUID, IsNumber } from 'class-validator';

export class CreateCourseDto {
  @IsUUID()
  @IsNotEmpty()
  teacherId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsOptional()
  @IsNumber()
  rating?: number;

  @IsOptional()
  @IsString()
  logoImage?: string;

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsUUID()
  @IsNotEmpty()
  categoryId: string;

  @IsOptional()
  @IsString()
  discount: number;

  @IsNotEmpty()
  @IsString()
  createdAt: string;

  @IsOptional()
  @IsString()
  updatedAt?: string;

  @IsOptional()
  @IsString()
  deletedAt?: string;
}
