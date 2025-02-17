import { CategoriesService } from '@modules/categories/categories.service';
import { UsersService } from '@modules/users/users.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

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
    const existCourse = await this.courseRepository.findOneByTitle(createCourseDto.title);

    if (existCourse) throw new BadRequestException('This course name already exists!');

    const teacherExists = await this.usersService.isExists(createCourseDto.teacherId);
    const categoryExists = await this.categoryService.isExists(createCourseDto.categoryId);

    if (teacherExists && categoryExists) {
      await this.courseRepository.createCourse(createCourseDto);

      return;
    }

    throw new BadRequestException('Create course exception');
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

  async deleteCourse(id: string): Promise<void> {
    const doesCourseExist = await this.courseRepository.isExists(id);

    if (!doesCourseExist) {
      throw new NotFoundException('Course not found');
    }

    await this.courseRepository.softDeleteCourse(id);
  }
}
