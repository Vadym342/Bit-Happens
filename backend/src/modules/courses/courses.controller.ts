import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';

import { CoursesService } from './courses.service';
import { CourseIdParamDto } from './dtos/course-id-param.dto';
import { CreateCourseDto } from './dtos/create-courses.dto';
import { UpdateCourseDto } from './dtos/update-courses.dto';
import { Course } from './entities/course.entity';
import { PermissionGuard } from '@modules/auth/roles/permission.guards';
import { Permissions } from '@modules/auth/decorators/permissions.decorator';
import { PERMISSIONS } from '@modules/auth/roles/permissions';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @UseGuards(PermissionGuard)
  @Permissions(PERMISSIONS.CREATE_COURSE)
  @HttpCode(HttpStatus.CREATED)
  async createCourse(@Body() createCourseDto: CreateCourseDto): Promise<void> {
    return this.coursesService.createCourse(createCourseDto);
  }

  @Get()
  @UseGuards(PermissionGuard)
  @Permissions(PERMISSIONS.VIEW_COURSES)
  async getAllCourses(): Promise<Course[]> {
    return this.coursesService.findAllCourses();
  }

  @Get(':id')
  @UseGuards(PermissionGuard)
  @Permissions(PERMISSIONS.VIEW_COURSES)
  async getCourseById(@Param('id') id: string): Promise<Course> {
    return this.coursesService.findCourseById(id);
  }

  @Patch(':id')
  @UseGuards(PermissionGuard)
  @Permissions(PERMISSIONS.UPDATE_COURSE)
  @HttpCode(HttpStatus.NO_CONTENT)
  async updateCourse(@Param() { id }: CourseIdParamDto, @Body() updateCourseDto: UpdateCourseDto): Promise<void> {
    await this.coursesService.updateCourse(id, updateCourseDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteCourse(@Param() { id }: CourseIdParamDto): Promise<void> {
    await this.coursesService.deleteCourse(id);
  }
}
