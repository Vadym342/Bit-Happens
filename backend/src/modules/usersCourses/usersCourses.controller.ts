import { Controller, Get, Post, Body, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersCoursesService } from './usersCourses.service';
import { CreateUserCourseDto } from './dto/create-userCourses.dto';
import { UserCourse } from './entities/usersCourses.entity';

@Controller('users-courses')
export class UsersCoursesController {
  constructor(private readonly usersCoursesService: UsersCoursesService) {}

  @Post()
  async create(@Body() createUserCourseDto: CreateUserCourseDto) {
    return this.usersCoursesService.create(createUserCourseDto);
  }

  @Get('user/:userId')
  async getByUserId(@Param('userId') userId: string): Promise<UserCourse[]> {
    return this.usersCoursesService.findByUserId(userId);
  }
}
