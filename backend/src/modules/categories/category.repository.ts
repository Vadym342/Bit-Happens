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

  async findOneById(categoryId: string): Promise<Category | null> {
    try {
      return await this.findOne({ where: { id: categoryId } });
    } catch (error) {
      throw new BadRequestException(`Error fetching category: ${error.message}`);
    }
  }

  async isExists(categoryId: string): Promise<boolean> {
    try {
      return await this.exists({
        where: {
          id: categoryId,
        },
      });
    } catch (error) {
      throw new BadRequestException(`Error finding category: ${error.message}`);
    }
  }

  async findOneByTitle(title: string): Promise<Category | null> {
    try {
      return await this.findOne({ where: { name: title } });
    } catch (error) {
      throw new BadRequestException(`Error fetching category: ${error.message}`);
    }
  }
}
