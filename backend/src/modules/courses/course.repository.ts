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
    try {
      return await this.courseRepository.find();
    } catch (error) {
      throw new BadRequestException(`Error fetching courses: ${error.message}`);
    }
  }

  async findOneById(id: string): Promise<Course | null> {
    try {
      return await this.courseRepository.findOne({ where: { id } });
    } catch (error) {
      throw new BadRequestException(`Error fetching course: ${error.message}`);
    }
  }
}
