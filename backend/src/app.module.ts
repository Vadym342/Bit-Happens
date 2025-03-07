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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
