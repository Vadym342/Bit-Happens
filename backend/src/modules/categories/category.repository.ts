import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCategoryDto } from './dtos/create-categories.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryRepository extends Repository<Category> {
  constructor(
    @InjectRepository(Category)
    categoryRepository: Repository<Category>,
  ) {
    super(categoryRepository.target, categoryRepository.manager, categoryRepository.queryRunner);
  }

  async createCategory(categoryData: CreateCategoryDto): Promise<void> {
    try {
      await this.save(categoryData);
    } catch (error) {
      throw new BadRequestException(`Error creating course: ${error.message}`);
    }
  }
}
