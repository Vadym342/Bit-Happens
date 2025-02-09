import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriesModule } from '@modules/categories/categories.module';
import { CoursesModule } from '@modules/courses/courses.module';
import { LessonsModule } from '@modules/lessons/lessons.module';
import { SoftwaresModule } from '@modules/softwares/softwares.module';
import { UsersModule } from '@modules/users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getDataSourceConfig } from './database/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => getDataSourceConfig(),
    }),
    UsersModule,
    CoursesModule,
    CategoriesModule,
    SoftwaresModule,
    LessonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
