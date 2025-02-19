import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';

import { CoursesService } from './courses.service';
import { CourseIdParamDto } from './dtos/course-id-param.dto';
import { CreateCourseDto } from './dtos/create-courses.dto';
import { UpdateCourseDto } from './dtos/update-courses.dto';
import { Course } from './entities/course.entity';
import { PermissionGuard } from '@modules/auth/guards/permission.guard';
import { Permissions } from '@modules/auth/decorators/permissions.decorator';
import { PERMISSIONS } from '@modules/auth/roles/permissions';

@Controller('courses')
@UseGuards(PermissionGuard)
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @Permissions(PERMISSIONS.CREATE_COURSE)
  @HttpCode(HttpStatus.CREATED)
  async createCourse(@Body() createCourseDto: CreateCourseDto): Promise<void> {
    return this.coursesService.createCourse(createCourseDto);
  }

  @Get()
  @Permissions(PERMISSIONS.VIEW_ALL_COURSES)
  async getAllCourses(): Promise<Course[]> {
    return this.coursesService.findAllCourses();
  }

  @Get(':id')
  async getCourseById(@Param() { id }: CourseIdParamDto): Promise<Course> {
    return this.coursesService.findCourseById(id);
  }

  @Patch(':id')
  @Permissions(PERMISSIONS.UPDATE_COURSE)
  @HttpCode(HttpStatus.NO_CONTENT)
  async updateCourse(@Param() { id }: CourseIdParamDto, @Body() updateCourseDto: UpdateCourseDto): Promise<void> {
    await this.coursesService.updateCourse(id, updateCourseDto);
  }

  @Delete(':id')
  @Permissions(PERMISSIONS.DELETE_COURSE)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteCourse(@Param() { id }: CourseIdParamDto): Promise<void> {
    await this.coursesService.deleteCourse(id);
  }
}
