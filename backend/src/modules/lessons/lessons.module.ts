import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from '@modules/users/users.module';

import { Lesson } from './entities/lessons.entity';
import { LessonRepository } from './lesson.repository';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Lesson])],
  controllers: [LessonsController],
  providers: [LessonsService, LessonRepository, JwtService],
  exports: [LessonsService],
})
export class LessonsModule {}
