import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class GetCoursesQueryDto {
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categoryId?: string[];

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsNumber()
  priceMin?: number;

  @IsOptional()
  @IsNumber()
  priceMax?: number;

  @IsOptional()
  @IsNumber()
  page?: number;

  @IsOptional()
  @IsNumber()
  limit?: number;
}
