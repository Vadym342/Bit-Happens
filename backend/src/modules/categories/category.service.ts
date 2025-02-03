import { BadRequestException, HttpCode, HttpStatus, Injectable } from '@nestjs/common';

import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  @HttpCode(HttpStatus.CREATED)
  async create(createCategoryDto: CreateCategoryDto) {
    const existCategory = await this.categoryRepository.findOne({
      where: {
        name: createCategoryDto.name,
      },
    });

    if (existCategory) throw new BadRequestException('This category name already exists!');

    await this.categoryRepository.createCategory({
      name: createCategoryDto.name,
      description: createCategoryDto.description,
    });
  }
}
