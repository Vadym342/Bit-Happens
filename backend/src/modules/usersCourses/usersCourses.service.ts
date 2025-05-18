import { Injectable } from '@nestjs/common';
import { UsersCoursesRepository } from './usersCourses.repository';
import { CreateUserCourseDto } from './dto/create-userCourses.dto';
import { UserCourse } from './entities/usersCourses.entity';

@Injectable()
export class UsersCoursesService {
  constructor(private readonly usersCoursesRepository: UsersCoursesRepository) {}

  async create(createUserCourseDto: CreateUserCourseDto): Promise<void> {
    try {
      await this.usersCoursesRepository.createUserCourse({
        userId: createUserCourseDto.userId,
        courseId: createUserCourseDto.courseId,
        status: createUserCourseDto.status,
      });
    } catch (error) {
      throw error;
    }
  }

  async findByUserId(userId: string): Promise<UserCourse[]> {
    return this.usersCoursesRepository.findByUserId(userId);
  }
}
