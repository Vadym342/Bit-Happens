import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

import { CoursesService } from './courses.service';
import { CourseIdParamDto } from './dtos/course-id-param.dto';
import { CreateCourseDto } from './dtos/create-courses.dto';
import { UpdateCourseDto } from './dtos/update-courses.dto';
import { Course } from './entities/course.entity';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createCourse(@Body() createCourseDto: CreateCourseDto): Promise<void> {
    return this.coursesService.createCourse(createCourseDto);
  }

  @Get()
  async getAllCourses(): Promise<Course[]> {
    return this.coursesService.findAllCourses();
  }

  @Get(':id')
  async getCourseById(@Param('id') id: string): Promise<Course> {
    return this.coursesService.findCourseById(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async updateCourse(@Param() { id }: CourseIdParamDto, @Body() updateCourseDto: UpdateCourseDto): Promise<void> {
    await this.coursesService.updateCourse(id, updateCourseDto);
  }
}
