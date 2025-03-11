import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  @Length(3, 50)
  @IsOptional()
  name?: string;

  @IsString()
  @Length(5, 100)
  @IsOptional()
  description?: string;
}
