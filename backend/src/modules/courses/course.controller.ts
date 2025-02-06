import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { CoursesService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createCourse(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.createCourse(createCourseDto);
  }
}
