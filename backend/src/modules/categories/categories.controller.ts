import { Permissions } from '@modules/auth/decorators/permissions.decorator';
import { PermissionGuard } from '@modules/auth/guards/permission.guard';
import { PERMISSIONS } from '@modules/auth/roles/permissions';
import { Controller, Get, Param, Body, Post, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';

import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dtos/create-categories.dto';
import { Category } from './entities/category.entity';

@Controller('categories')
@UseGuards(PermissionGuard)
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @Permissions(PERMISSIONS.CREATE_CATEGORY)
  @HttpCode(HttpStatus.CREATED)
  async createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<void> {
    return this.categoriesService.createCategory(createCategoryDto);
  }

  @Get(':id')
  async getCategoryById(@Param('id') categoryId: string): Promise<Category> {
    return this.categoriesService.getCategoryById(categoryId);
  }
}
