import { IsUUID } from 'class-validator';

export class UserIdParamDto {
  @IsUUID()
  id!: string;
}
