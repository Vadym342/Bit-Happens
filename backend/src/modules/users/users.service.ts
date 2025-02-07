import { BadRequestException, Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { UserRepository } from './users.repository';
import { CreateUserDto } from './dto/create-users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findUserByEmail(createUserDto.email);
    if (existUser) throw new BadRequestException('This email already exist');

    await this.userRepository.createUser({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      email: createUserDto.email,
      age: createUserDto.age,
      password: await argon2.hash(createUserDto.password),
      roleId: createUserDto.roleId,
    });
  }

  async findOne(email: string) {
    return await this.userRepository.findUserByEmail(email);
  }
}
