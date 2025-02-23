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
          deletedAt: null,
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
          deletedAt: null,
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
          deletedAt: null,
        },
      });
    } catch (error) {
      throw new BadRequestException(`Error finding user: ${error.message}`);
    }
  }

  async findAllUsers(): Promise<User[]> {
    try {
      return await this.find({
        where: {
          deletedAt: null,
        },
      });
    } catch (error) {
      throw new BadRequestException(`Error fetching users: ${error.message}`);
    }
  }

  async updateOne(id: string, updateData: Partial<User>): Promise<void> {
    try {
      await this.update(id, updateData);
    } catch (error) {
      throw new BadRequestException(`Failed to update user: ${error.message}`);
    }
  }

  async deleteOne(id: string): Promise<void> {
    try {
      await this.softDelete(id);
    } catch (error) {
      throw new BadRequestException(`Failed to delete user: ${error.message}`);
    }
  }
}
