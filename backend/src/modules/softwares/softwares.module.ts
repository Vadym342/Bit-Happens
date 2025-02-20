import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from '@modules/users/users.module';

import { Software } from './entities/software.entity';
import { SoftwareRepository } from './software.repository';
import { SoftwaresController } from './softwares.controller';
import { SoftwaresService } from './softwares.service';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Software])],
  controllers: [SoftwaresController],
  providers: [SoftwaresService, SoftwareRepository, JwtService],
})
export class SoftwaresModule {}
