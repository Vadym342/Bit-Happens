import { CategoriesService } from '@modules/categories/categories.service';
import { Category } from '@modules/categories/entities/category.entity';
import { User } from '@modules/users/entity/users.entity';
import { UsersService } from '@modules/users/users.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CourseRepository } from './course.repository';
import { CreateCourseDto } from './dtos/create-courses.dto';
import { UpdateCourseDto } from './dtos/update-courses.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    private readonly courseRepository: CourseRepository,
    private readonly usersService: UsersService,
    private readonly categoryService: CategoriesService,
  ) {}

  async createCourse(createCourseDto: CreateCourseDto): Promise<void> {
    try {
      const existCourse = await this.courseRepository.findOneByTitle(createCourseDto.title);

      if (existCourse) throw new BadRequestException('This course name already exists!');

      const teacherExists = await this.usersService.isExists(createCourseDto.teacherId);
      const categoryExists = await this.categoryService.isExists(createCourseDto.categoryId);

      if (teacherExists && categoryExists) {
        await this.courseRepository.createCourse(createCourseDto);
      }

      throw new BadRequestException('Create course exception');
    } catch (error) {
      throw error;
    }
  }

  async findAllCourses(): Promise<Course[]> {
    return this.courseRepository.findAll();
  }

  async findCourseById(id: string): Promise<Course> {
    try {
      const course = await this.courseRepository.findOneById(id);

      if (!course) throw new NotFoundException('Course not found');

      return course;
    } catch (error) {
      throw error;
    }
  }

  async updateCourse(id: string, updateCourseDto: UpdateCourseDto): Promise<void> {
    try {
      const course = await this.courseRepository.findOneById(id);

      if (!course) {
        throw new NotFoundException('Course not found');
      }

      let doesUserExist = true;
      let doesCategoryExist = true;

      if (updateCourseDto?.teacherId) {
        doesUserExist = await this.usersService.isExists(updateCourseDto.teacherId);
      }

      if (updateCourseDto?.categoryId) {
        doesCategoryExist = await this.categoryService.isExists(updateCourseDto.categoryId);
      }

      if (doesUserExist && doesCategoryExist) {
        await this.courseRepository.updateOne(id, updateCourseDto);
      }
    } catch (error) {
      throw error;
    }
  }
}
