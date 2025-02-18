import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';

import { CreateLessonDto } from './dtos/create-lessons.dto';
import { Lesson } from './entities/lessons.entity';
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

  async findLessonById(id: string): Promise<Lesson> {
    try {
      const lesson = await this.lessonRepository.findOneById(id);

      if (!lesson) throw new NotFoundException('Lesson not found');

      return lesson;
    } catch (error) {
      throw error;
    }
  }

  async findAllLessons(): Promise<Lesson[]> {
    return this.lessonRepository.findAll();
  }

  async deleteLesson(id: string): Promise<void> {
    const doesLessonExist = await this.lessonRepository.isExists(id);

    if (!doesLessonExist) {
      throw new NotFoundException('Lesson not found');
    }

    await this.lessonRepository.softDeleteLesson(id);
  }
}
