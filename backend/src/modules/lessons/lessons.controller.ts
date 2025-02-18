import { Controller, Post, HttpCode, HttpStatus, Body, Get, Param, UseGuards } from '@nestjs/common';

import { CreateLessonDto } from './dtos/create-lessons.dto';
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
  @UseGuards(PermissionGuard)
  @Permissions(PERMISSIONS.CREATE_LESSON)
  async createLesson(@Body() createLessonDto: CreateLessonDto): Promise<void> {
    return this.lessonsService.createLesson(createLessonDto);
  }

  @Get(':id')
  async getLessonById(@Param('id') id: string): Promise<Lesson> {
    return this.lessonsService.findLessonById(id);
  }

  @Get()
  async getAllLessons(): Promise<Lesson[]> {
    return this.lessonsService.findAllLessons();
  }
}
