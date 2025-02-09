import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dtos/create-categories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<void> {
    return this.categoriesService.createCategory(createCategoryDto);
  }
}
