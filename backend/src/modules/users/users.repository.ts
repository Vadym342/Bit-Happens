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
}
