import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/courses.entity';

@Injectable()
export class CourseRepository extends Repository<Course> {
  constructor(
    @InjectRepository(Course)
    courseRepository: Repository<Course>,
  ) {
    super(courseRepository.target, courseRepository.manager, courseRepository.queryRunner);
  }

  async createCourse(courseData: CreateCourseDto): Promise<void> {
    try {
      await this.save(courseData);
    } catch (error) {
      throw new BadRequestException(`Error creating course: ${error.message}`);
    }
  }
}
