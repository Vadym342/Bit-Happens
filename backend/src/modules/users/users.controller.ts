import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';

import { CreateUserDto } from './dto/create-users.dto';
import { UsersService } from './users.service';
import { User } from './entity/users.entity';
import { PermissionGuard } from '@modules/auth/guards/permission.guard';
import { Permissions } from '@modules/auth/decorators/permissions.decorator';
import { PERMISSIONS } from '@modules/auth/roles/permissions';
import { UserIdParamDto } from './dto/user-id-param.dto';
@Controller('users')
@UseGuards(PermissionGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Permissions(PERMISSIONS.CREATE_USERS)
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Permissions(PERMISSIONS.VIEW_ALL_USERS)
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @Permissions(PERMISSIONS.VIEW_ONE_USER)
  async getUserById(@Param() { id }: UserIdParamDto): Promise<User> {
    return this.usersService.findUserById(id);
  }
}
