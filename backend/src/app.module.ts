import { CategoriesModule } from '@modules/categories/categories.module';
import { CoursesModule } from '@modules/courses/courses.module';
import { SoftwaresModule } from '@modules/softwares/softwares.module';
import { UsersModule } from '@modules/users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
