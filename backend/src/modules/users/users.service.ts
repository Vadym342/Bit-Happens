import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import * as argon2 from 'argon2';
import { UserRepository } from './users.repository';

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

    const token = this.jwtService.sign({ email: createUserDto.email });
  }

  async findOne(email: string) {
    return this.userRepository.findUserByEmail(email);
  }
}
