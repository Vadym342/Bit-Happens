import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as argon2 from 'argon2';

import { CreateUserDto } from './dto/create-users.dto';
import { User } from './entity/users.entity';
import { UserRepository } from './user.repository';
import { UpdateUserDto } from './dto/update-users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    try {
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
    } catch (error) {
      throw error;
    }
  }

  async findOne(email: string): Promise<User> {
    return this.userRepository.findUserByEmail(email);
  }

  async isExists(userId: string): Promise<boolean> {
    return this.userRepository.isExists(userId);
  }

  async findUserById(id: string): Promise<User> {
    return this.userRepository.findUserById(id);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAllUsers();
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<void> {
    try {
      const user = await this.userRepository.findUserById(id);

      if (!user) {
        throw new NotFoundException('User not found');
      }

      await this.userRepository.updateOne(id, updateUserDto);
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: string): Promise<void> {
    const user = await this.userRepository.isExists(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.userRepository.deleteOne(id);
  }
}
