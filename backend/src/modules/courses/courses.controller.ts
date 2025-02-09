import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dtos/create-courses.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createCourse(@Body() createCourseDto: CreateCourseDto): Promise<void> {
    return this.coursesService.createCourse(createCourseDto);
  }
}
