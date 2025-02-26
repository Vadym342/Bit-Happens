import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';

import { Permissions } from '@modules/auth/decorators/permissions.decorator';
import { PermissionGuard } from '@modules/auth/guards/permission.guard';
import { PERMISSIONS } from '@modules/auth/roles/permissions';

import { CreateSoftwareDto } from './dtos/create-softwares.dto';
import { SoftwaresService } from './softwares.service';

@Controller('softwares')
@UseGuards(PermissionGuard)
export class SoftwaresController {
  constructor(private readonly softwaresService: SoftwaresService) {}

  @Post()
  @Permissions(PERMISSIONS.CREATE_SOFTWARE)
  @HttpCode(HttpStatus.CREATED)
  async createSoftware(@Body() createSoftwareDto: CreateSoftwareDto): Promise<void> {
    return this.softwaresService.createSoftware(createSoftwareDto);
  }
}
