import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';

import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dtos/create-categories.dto';
import { PermissionGuard } from '@modules/auth/roles/permission.guards';
import { Permissions } from '@modules/auth/decorators/permissions.decorator';
import { PERMISSIONS } from '@modules/auth/roles/permissions';

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
}
