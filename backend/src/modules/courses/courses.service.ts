import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { CourseRepository } from './course.repository';
import { CreateCourseDto } from './dtos/create-courses.dto';
import { UpdateCourseDto } from './dtos/update-courses.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(private readonly courseRepository: CourseRepository) {}

  async createCourse(createCourseDto: CreateCourseDto): Promise<void> {
    const existCourse = await this.courseRepository.findOneById(createCourseDto.title);

    if (existCourse) throw new BadRequestException('This course name already exists!');

    await this.courseRepository.createCourse(createCourseDto);
  }

  async findAllCourses(): Promise<Course[]> {
    return this.courseRepository.findAll();
  }

  async findCourseById(id: string): Promise<Course> {
    try {
      const course = await this.courseRepository.findOneById(id);

      if (!course) throw new NotFoundException('Course not found');

      return course;
    } catch (error) {
      throw error;
    }
  }

  async updateCourse(id: string, updateCourseDto: UpdateCourseDto): Promise<Course> {
    try {
      const course = await this.courseRepository.findOneById(id);

      if (!course) throw new NotFoundException('Course not found');

      const updatedCourse = Object.assign(course, updateCourseDto);

      return await this.courseRepository.save(updatedCourse);
    } catch (error) {
      throw error;
    }
  }
}
