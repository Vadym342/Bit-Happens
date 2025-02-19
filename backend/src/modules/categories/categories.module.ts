import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CategoryRepository } from './category.repository';
import { Category } from './entities/category.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from '@modules/users/users.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Category])],
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoryRepository, JwtService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
