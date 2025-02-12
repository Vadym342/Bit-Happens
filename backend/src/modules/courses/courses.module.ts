import { CategoriesService } from '@modules/categories/categories.service';
import { Category } from '@modules/categories/entities/category.entity';
import { User } from '@modules/users/entity/users.entity';
import { UsersService } from '@modules/users/users.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseRepository } from './course.repository';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, User, Category])],
  controllers: [CoursesController],
  providers: [CoursesService, CourseRepository, UsersService, CategoriesService],
  exports: [CoursesService],
})
export class CoursesModule {}
