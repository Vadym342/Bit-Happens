import { Permissions } from '@modules/auth/decorators/permissions.decorator';
import { PermissionGuard } from '@modules/auth/guards/permission.guard';
import { PERMISSIONS } from '@modules/auth/roles/permissions';
import { Controller, Get, Put, Param, Delete, ParseUUIDPipe, Body, Post, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';

import { CategoriesService } from './categories.service';
import { CategoryIdParamDto } from './dtos/categories-id-param.dto';
import { CreateCategoryDto } from './dtos/create-categories.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
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

  @Get()
  async getAllCategories(): Promise<Category[]> {
    return this.categoriesService.findAllCategories();
  }

  @Get(':id')
  async getCategoryById(@Param() { id }: CategoryIdParamDto): Promise<Category> {
    return this.categoriesService.getCategoryById(id);
  }

  @Get('title/:title')
  async getCategoryByTitle(@Param('title') title: string): Promise<Category> {
    return this.categoriesService.getCategoryByTitle(title);
  }

  @Put(':id')
  async updateCategory(@Param('id', ParseUUIDPipe) id: string, @Body() updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    return this.categoriesService.updateCategory(id, updateCategoryDto);
  }

  @Delete(':id')
  @Permissions(PERMISSIONS.DELETE_CATEGORY)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteCategory(@Param() { id }: CategoryIdParamDto): Promise<void> {
    await this.categoriesService.deleteCategory(id);
  }
}
