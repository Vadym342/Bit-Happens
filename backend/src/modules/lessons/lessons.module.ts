import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Lesson } from './entities/lessons.entity';
import { LessonRepository } from './lesson.repository';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';
import { UsersModule } from '@modules/users/users.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Lesson])],
  controllers: [LessonsController],
  providers: [LessonsService, LessonRepository, JwtService],
})
export class LessonsModule {}
