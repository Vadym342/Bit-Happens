import { Controller, Post, HttpCode, HttpStatus, Body, Get, Param, Delete, UseGuards } from '@nestjs/common';

import { CreateLessonDto } from './dtos/create-lessons.dto';
import { LessonIdParamDto } from './dtos/lesson-id-param.dto';
import { Lesson } from './entities/lessons.entity';
import { LessonsService } from './lessons.service';
import { PermissionGuard } from '@modules/auth/guards/permission.guard';
import { Permissions } from '@modules/auth/decorators/permissions.decorator';
import { PERMISSIONS } from '@modules/auth/roles/permissions';

@Controller('lessons')
@UseGuards(PermissionGuard)
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  @Permissions(PERMISSIONS.CREATE_LESSON)
  @HttpCode(HttpStatus.CREATED)
  async createLesson(@Body() createLessonDto: CreateLessonDto): Promise<void> {
    return this.lessonsService.createLesson(createLessonDto);
  }

  @Get()
  @Permissions(PERMISSIONS.VIEW_ALL_LESSONS)
  async getAllLessons(): Promise<Lesson[]> {
    return this.lessonsService.findAllLessons();
  }

  @Get(':id')
  @Permissions(PERMISSIONS.VIEW_ONE_LESSON)
  async getLessonById(@Param() { id }: LessonIdParamDto): Promise<Lesson> {
    return this.lessonsService.findLessonById(id);
  }

  @Delete(':id')
  @Permissions(PERMISSIONS.DELETE_LESSON)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteLesson(@Param() { id }: LessonIdParamDto): Promise<void> {
    await this.lessonsService.deleteLesson(id);
  }
}
