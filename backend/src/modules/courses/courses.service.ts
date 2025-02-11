import { Category } from '@modules/categories/entities/category.entity';
import { User } from '@modules/users/entity/users.entity';
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
    @InjectRepository(User)
    private readonly teacherRepository: Repository<User>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async createCourse(createCourseDto: CreateCourseDto): Promise<void> {
    const existCourse = await this.courseRepository.findOneById(createCourseDto.title);

    if (existCourse) throw new BadRequestException('This course name already exists!');

    await this.courseRepository.createCourse(createCourseDto);

    if (createCourseDto.teacherId) {
      const teacherExists = await this.teacherRepository.findOne({
        where: { id: createCourseDto.teacherId },
      });

      if (!teacherExists) {
        throw new NotFoundException('Teacher not found');
      }
    }

    if (createCourseDto.categoryId) {
      const categoryExists = await this.categoryRepository.findOne({
        where: { id: createCourseDto.categoryId },
      });

      if (!categoryExists) {
        throw new NotFoundException('Category not found');
      }
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
    const course = await this.courseRepository.findOneById(id);

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    if (updateCourseDto.teacherId) {
      const teacherExists = await this.teacherRepository.findOne({
        where: { id: updateCourseDto.teacherId },
      });

      if (!teacherExists) {
        throw new NotFoundException('Teacher not found');
      }
    }

    if (updateCourseDto.categoryId) {
      const categoryExists = await this.categoryRepository.findOne({
        where: { id: updateCourseDto.categoryId },
      });

      if (!categoryExists) {
        throw new NotFoundException('Category not found');
      }
    }
    await this.courseRepository.updateOne(id, updateCourseDto);
  }
}
