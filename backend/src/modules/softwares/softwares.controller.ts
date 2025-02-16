import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';

import { CreateSoftwareDto } from './dtos/create-softwares.dto';
import { SoftwaresService } from './softwares.service';
import { PermissionGuard } from '@modules/auth/roles/permission.guards';
import { Permissions } from '@modules/auth/decorators/permissions.decorator';
import { PERMISSIONS } from '@modules/auth/roles/permissions';

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
