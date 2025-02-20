import { IsUUID } from 'class-validator';

export class CategoryIdParamDto {
  @IsUUID()
  id!: string;
}
