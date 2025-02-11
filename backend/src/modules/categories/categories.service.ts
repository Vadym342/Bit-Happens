import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dtos/create-categories.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<void> {
    const existCategory = await this.categoryRepository.findOne({
      where: {
        name: createCategoryDto.name,
      },
    });

    if (existCategory) throw new BadRequestException('This category name already exists!');

    await this.categoryRepository.createCategory(createCategoryDto);
  }

  async validateCategory(categoryId: string): Promise<void> {
    const category = await this.categoryRepository.findOne({ where: { id: categoryId } });

    if (!category) {
      throw new NotFoundException('Category not found');
    }
  }
}
