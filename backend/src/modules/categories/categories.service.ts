import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dtos/create-categories.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<void> {
    const existCategory = await this.categoryRepository.findOne({
      where: {
        name: createCategoryDto.name,
      },
    });

    if (existCategory) {
      throw new BadRequestException('This category name already exists!');
    }

    await this.categoryRepository.createCategory(createCategoryDto);
  }

  async getCategoryById(categoryId: string): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: { id: categoryId },
    });

    if (!category) {
      throw new NotFoundException(`Category with ID ${category.id} not found`);
    }

    return category;
  }

  async findAllCategories(): Promise<Category[]> {
    try {
      return await this.categoryRepository.findAllCategories();
    } catch (error) {
      throw new BadRequestException(`Error fetching categories: ${error.message}`);
    }
  }

  async getCategoryByTitle(title: string): Promise<Category> {
    const category = await this.categoryRepository.findOneByTitle(title);

    if (!category) {
      throw new NotFoundException(`Category with title "${title}" not found`);
    }

    return category;
  }

  async updateCategory(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    try {
      const category = await this.categoryRepository.findOne({ where: { id } });

      if (!category) {
        throw new NotFoundException(`Category with ID ${id} not found`);
      }

      Object.assign(category, updateCategoryDto);

      return await this.categoryRepository.save(category);
    } catch (error) {
      throw new BadRequestException(`Error updating category: ${error.message}`);
    }
  }

  async isExists(categoryId: string): Promise<boolean> {
    return this.categoryRepository.isExists(categoryId);
  }
}
