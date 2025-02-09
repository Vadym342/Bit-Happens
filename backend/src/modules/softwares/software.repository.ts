import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateSoftwareDto } from './dtos/create-softwares.dto';
import { Software } from './entities/software.entity';

@Injectable()
export class SoftwareRepository extends Repository<Software> {
  constructor(
    @InjectRepository(Software)
    softwareRepository: Repository<Software>,
  ) {
    super(softwareRepository.target, softwareRepository.manager, softwareRepository.queryRunner);
  }

  async createSoftware(softwareData: CreateSoftwareDto): Promise<void> {
    try {
      await this.save(softwareData);
    } catch (error) {
      throw new BadRequestException(`Error creating software src: ${error.message}`);
    }
  }
}
