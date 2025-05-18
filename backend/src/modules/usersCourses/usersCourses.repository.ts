import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCourse } from './entities/usersCourses.entity';
import { CreateUserCourseDto } from './dto/create-userCourses.dto';

@Injectable()
export class UsersCoursesRepository extends Repository<UserCourse> {
  constructor(
    @InjectRepository(UserCourse)
    usersCoursesRepository: Repository<UserCourse>,
  ) {
    super(usersCoursesRepository.target, usersCoursesRepository.manager, usersCoursesRepository.queryRunner);
  }

  async createUserCourse(userData: CreateUserCourseDto): Promise<void> {
    try {
      await this.save(userData);
    } catch (error) {
      throw new BadRequestException(`Error creating user: ${error.message}`);
    }
  }

  async findByUserId(userId: string): Promise<UserCourse[]> {
    try {
      return await this.find({ where: { userId } });
    } catch (error) {
      throw new BadRequestException(`Error fetching by userId: ${error.message}`);
    }
  }
}
