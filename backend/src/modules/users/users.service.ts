import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import * as argon2 from 'argon2';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });
    if (existUser) throw new BadRequestException('This email already exist');

    const user = await this.userRepository.createUser({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      email: createUserDto.email,
      age: createUserDto.age,
      password: await argon2.hash(createUserDto.password),
      balance: createUserDto.balance,
      roleId: createUserDto.roleId,
      favoritesId: createUserDto.favoritesId,
      learningHistoryId: createUserDto.learningHistoryId,
      wishlistId: createUserDto.wishlistId,
    });

    return { user };
  }
}
