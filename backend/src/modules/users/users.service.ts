import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import * as argon2 from 'argon2';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  @HttpCode(HttpStatus.CREATED)
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.createUser({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      email: createUserDto.email,
      age: createUserDto.age,
      password: await argon2.hash(createUserDto.password),
      roleId: createUserDto.roleId,
    });
  }
}
