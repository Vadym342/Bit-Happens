import { Injectable, BadRequestException } from '@nestjs/common';

import { CreateLessonDto } from './dtos/create-lessons.dto';
import { LessonRepository } from './lesson.repository';

@Injectable()
export class LessonsService {
  constructor(private readonly lessonRepository: LessonRepository) {}

  async createLesson(createLessonDto: CreateLessonDto): Promise<void> {
    const existCategory = await this.lessonRepository.findOne({
      where: {
        title: createLessonDto.title,
      },
    });

    if (existCategory) throw new BadRequestException('This lesson title already exists!');

    await this.lessonRepository.createLesson(createLessonDto);
  }
}
