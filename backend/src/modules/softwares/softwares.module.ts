import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Software } from './entities/software.entity';
import { SoftwareRepository } from './software.repository';
import { SoftwaresController } from './softwares.controller';
import { SoftwaresService } from './softwares.service';

@Module({
  imports: [TypeOrmModule.forFeature([Software])],
  controllers: [SoftwaresController],
  providers: [SoftwaresService, SoftwareRepository],
})
export class SoftwaresModule {}
