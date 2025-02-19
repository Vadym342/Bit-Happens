import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-users.dto';
import { User } from './entity/users.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    userRepository: Repository<User>,
  ) {
    super(userRepository.target, userRepository.manager, userRepository.queryRunner);
  }

  async createUser(userData: CreateUserDto): Promise<void> {
    try {
      await this.save(userData);
    } catch (error) {
      throw new BadRequestException(`Error creating user: ${error.message}`);
    }
  }

  async findUserByEmail(email: string): Promise<User> {
    try {
      return await this.findOne({
        where: {
          email: email,
        },
      });
    } catch (error) {
      throw new BadRequestException(`Error finding user: ${error.message}`);
    }
  }

  async isExists(userId: string): Promise<boolean> {
    try {
      return await this.exists({
        where: {
          id: userId,
        },
      });
    } catch (error) {
      throw new BadRequestException(`Error finding user: ${error.message}`);
    }
  }

  async findUserById(id: string): Promise<User> {
    try {
      return await this.findOne({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new BadRequestException(`Error finding user: ${error.message}`);
    }
  }

  async findAllUsers(): Promise<User[]> {
    try {
      return await this.find();
    } catch (error) {
      throw new BadRequestException(`Error fetching users: ${error.message}`);
    }
  }
}
