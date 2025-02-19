import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Software } from './entities/software.entity';
import { SoftwareRepository } from './software.repository';
import { SoftwaresController } from './softwares.controller';
import { SoftwaresService } from './softwares.service';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from '@modules/users/users.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Software])],
  controllers: [SoftwaresController],
  providers: [SoftwaresService, SoftwareRepository, JwtService],
})
export class SoftwaresModule {}
