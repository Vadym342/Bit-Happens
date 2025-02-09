import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateLessonDto } from './dtos/create-lessons.dto';
import { Lesson } from './entities/lessons.entity';

@Injectable()
export class LessonRepository extends Repository<Lesson> {
  constructor(
    @InjectRepository(Lesson)
    lessonRepository: Repository<Lesson>,
  ) {
    super(lessonRepository.target, lessonRepository.manager, lessonRepository.queryRunner);
  }

  async createLesson(lessonData: CreateLessonDto): Promise<void> {
    try {
      await this.save(lessonData);
    } catch (error) {
      throw new BadRequestException(`Error creating lesson: ${error.message}`);
    }
  }
}
