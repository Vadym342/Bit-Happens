import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateSoftwareDto } from './dtos/create-softwares.dto';
import { SoftwareRepository } from './software.repository';

@Injectable()
export class SoftwaresService {
  constructor(private readonly softwareRepository: SoftwareRepository) {}

  async createSoftware(createSoftwareDto: CreateSoftwareDto): Promise<void> {
    const existSoftware = await this.softwareRepository.findOne({
      where: {
        name: createSoftwareDto.name,
      },
    });

    if (existSoftware) throw new BadRequestException('This software name already exists!');

    await this.softwareRepository.createSoftware(createSoftwareDto);
  }
}
