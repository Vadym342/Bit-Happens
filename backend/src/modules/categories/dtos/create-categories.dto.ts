import { Exclude } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name!: string;

  @IsString()
  description!: string;
}
