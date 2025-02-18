import { Controller, Post, HttpCode, HttpStatus, Body, Get, Param, Delete } from '@nestjs/common';

import { CreateLessonDto } from './dtos/create-lessons.dto';
import { LessonIdParamDto } from './dtos/lesson-id-param.dto';
import { Lesson } from './entities/lessons.entity';
import { LessonsService } from './lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
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

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteLesson(@Param() { id }: LessonIdParamDto): Promise<void> {
    await this.lessonsService.deleteLesson(id);
  }
}
