import { Controller, Post, HttpCode, HttpStatus, Body, UseGuards } from '@nestjs/common';

import { CreateLessonDto } from './dtos/create-lessons.dto';
import { LessonsService } from './lessons.service';
import { PermissionGuard } from '@modules/auth/roles/permission.guards';
import { Permissions } from '@modules/auth/decorators/permissions.decorator';
import { PERMISSIONS } from '@modules/auth/roles/permissions';

@Controller('lessons')
@UseGuards(PermissionGuard)
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Permissions(PERMISSIONS.CREATE_LESSON)
  async createLesson(@Body() createLessonDto: CreateLessonDto): Promise<void> {
    return this.lessonsService.createLesson(createLessonDto);
  }
}
