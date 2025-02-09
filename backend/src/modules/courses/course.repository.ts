import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCourseDto } from './dtos/create-courses.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseRepository {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async createCourse(courseData: CreateCourseDto): Promise<void> {
    try {
      await this.courseRepository.save(courseData);
    } catch (error) {
      throw new BadRequestException(`Error creating course: ${error.message}`);
    }
  }

  async findAll(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  async findOneById(id: string): Promise<Course | null> {
    return this.courseRepository.findOne({ where: { id } });
  }
}
