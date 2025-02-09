import { IsString } from 'class-validator';

export class CreateSoftwareDto {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsString()
  systemRequirements!: string;

  @IsString()
  version!: string;

  @IsString()
  downloadLink!: string;

  @IsString()
  logoImage!: string;
}
