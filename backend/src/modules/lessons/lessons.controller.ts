import { Controller, Post, HttpCode, HttpStatus, Body } from '@nestjs/common';

import { CreateLessonDto } from './dtos/create-lessons.dto';
import { LessonsService } from './lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createLesson(@Body() createLessonDto: CreateLessonDto): Promise<void> {
    return this.lessonsService.createLesson(createLessonDto);
  }
}
