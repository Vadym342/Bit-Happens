import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import * as argon2 from 'argon2';
import { UserRepository } from './user.repository';
import { User } from './entity/users.entity';

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
}
