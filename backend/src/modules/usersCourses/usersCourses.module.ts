import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersCoursesController } from './usersCourses.controller';
import { UsersCoursesService } from './usersCourses.service';
import { UsersCoursesRepository } from './usersCourses.repository';
import { UserCourse } from './entities/usersCourses.entity';

@Module({
  imports: [UsersCoursesModule, TypeOrmModule.forFeature([UserCourse])],
  controllers: [UsersCoursesController],
  providers: [UsersCoursesService, UsersCoursesRepository],
  exports: [UsersCoursesService],
})
export class UsersCoursesModule {}
