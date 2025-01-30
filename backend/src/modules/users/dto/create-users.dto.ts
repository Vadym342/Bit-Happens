import { Transform } from 'class-transformer';
import { IsEmail, IsNumber, IsOptional, IsString, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(100, { message: 'First name must be less then 100 symbols' })
  @MinLength(2, { message: 'First name must be more then 2 symbols' })
  @IsOptional()
  firstName!: string;

  @IsString()
  @MaxLength(100, { message: 'Last name must be less then 100 symbols' })
  @MinLength(2, { message: 'Last name must be more then 2 symbols' })
  @IsOptional()
  lastName!: string;

  @IsEmail()
  @MaxLength(40)
  @IsOptional()
  email!: string;

  @IsNumber()
  @IsOptional()
  age!: number;

  @MaxLength(40, { message: 'Password must be less then 40 symbols' })
  @MinLength(6, { message: 'Password must be more then 6 symbols' })
  @IsOptional()
  password!: string;

  @IsNumber()
  @IsOptional()
  balance!: number;

  @Transform(({ value }) => value.toString())
  @IsUUID()
  @IsOptional()
  roleId!: string;

  @Transform(({ value }) => value.toString())
  @IsUUID()
  @IsOptional()
  favoritesId?: string;

  @Transform(({ value }) => value.toString())
  @IsUUID()
  @IsOptional()
  learningHistoryId?: string;

  @Transform(({ value }) => value.toString())
  @IsUUID()
  @IsOptional()
  wishlistId?: string;
}
