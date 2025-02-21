import { IsEmail, IsNumber, IsOptional, IsString, IsUUID, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
  @MaxLength(100, { message: 'First name must be less then 100 symbols' })
  @MinLength(2, { message: 'First name must be more then 2 symbols' })
  @IsString()
  @IsOptional()
  firstName?: string;

  @MaxLength(100, { message: 'Last name must be less then 100 symbols' })
  @MinLength(2, { message: 'Last name must be more then 2 symbols' })
  @IsString()
  @IsOptional()
  lastName?: string;

  @IsEmail({}, { message: 'Invalid email format' })
  @MaxLength(40)
  @IsOptional()
  email?: string;

  @IsNumber()
  @IsOptional()
  age?: number;

  @MaxLength(40, { message: 'Password must be less then 40 symbols' })
  @MinLength(6, { message: 'Password must be more then 6 symbols' })
  @IsString()
  @IsOptional()
  password?: string;

  @IsUUID()
  @IsOptional()
  roleId?: string;

  @IsUUID()
  @IsOptional()
  favoritesId?: string;

  @IsUUID()
  @IsOptional()
  learningHistoryId?: string;

  @IsUUID()
  @IsOptional()
  wishlistId?: string;
}
