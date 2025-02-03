import { BadRequestException, Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';

import { CreateUserDto } from './dto/create-users.dto';
import { UsersRepository } from './users.repository';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });

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

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.userRepository.findOne(username);
  // }
}
