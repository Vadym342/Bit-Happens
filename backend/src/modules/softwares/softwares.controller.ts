import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { CreateSoftwareDto } from './dtos/create-softwares.dto';
import { SoftwaresService } from './softwares.service';

@Controller('softwares')
export class SoftwaresController {
  constructor(private readonly softwaresService: SoftwaresService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createSoftware(@Body() createSoftwareDto: CreateSoftwareDto): Promise<void> {
    return this.softwaresService.createSoftware(createSoftwareDto);
  }
}
