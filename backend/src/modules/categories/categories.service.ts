import { BadRequestException, Injectable } from '@nestjs/common';

import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dtos/create-categories.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<void> {
    const existCategory = await this.categoryRepository.findOne({
      where: {
        name: createCategoryDto.name,
      },
    });

    if (existCategory) throw new BadRequestException('This category name already exists!');

    await this.categoryRepository.createCategory(createCategoryDto);
  }

  async isExists(categoryId: string): Promise<boolean> {
    return this.categoryRepository.isExists(categoryId);
  }
}
