import { Controller, Post, HttpCode, HttpStatus, Body, Get, Param } from '@nestjs/common';

import { CreateLessonDto } from './dtos/create-lessons.dto';
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
}
