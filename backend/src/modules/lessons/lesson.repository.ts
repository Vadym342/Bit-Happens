import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateLessonDto } from './dtos/create-lessons.dto';
import { Lesson } from './entities/lessons.entity';

@Injectable()
export class LessonRepository extends Repository<Lesson> {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
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

  async findOneById(id: string): Promise<Lesson> {
    try {
      return await this.lessonRepository.findOne({ where: { id } });
    } catch (error) {
      throw new BadRequestException(`Error fetching lesson: ${error.message}`);
    }
  }

  async findOneByTitle(title: string): Promise<Lesson> {
    try {
      return await this.lessonRepository.findOne({ where: { title } });
    } catch (error) {
      throw new BadRequestException(`Error fetching lesson: ${error.message}`);
    }
  }
}
