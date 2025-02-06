import { BadRequestException, Injectable } from '@nestjs/common';

import { CourseRepository } from './course.repository';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  constructor(private readonly courseRepository: CourseRepository) {}

  async create(createCourseDto: CreateCourseDto) {
    const existCourse = await this.courseRepository.findOne({
      where: {
        title: createCourseDto.title,
      },
    });

    if (existCourse) throw new BadRequestException('This course name already exists!');

    await this.courseRepository.createCourse(createCourseDto);
  }
}
