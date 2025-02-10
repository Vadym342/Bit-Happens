import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '@modules/auth/auth.module';
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
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => getDataSourceConfig(),
    }),
    UsersModule,
    CoursesModule,
    CategoriesModule,
    AuthModule,
    SoftwaresModule,
    LessonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
