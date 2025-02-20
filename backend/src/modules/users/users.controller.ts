import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';

import { Permissions } from '@modules/auth/decorators/permissions.decorator';
import { PermissionGuard } from '@modules/auth/guards/permission.guard';
import { PERMISSIONS } from '@modules/auth/roles/permissions';

import { CreateUserDto } from './dto/create-users.dto';
import { UserIdParamDto } from './dto/user-id-param.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import { User } from './entity/users.entity';
import { UsersService } from './users.service';

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

  @Patch(':id')
  @Permissions(PERMISSIONS.UPDATE_USER)
  @HttpCode(HttpStatus.NO_CONTENT)
  async updateUser(@Param() { id }: UserIdParamDto, @Body() updateUserDto: UpdateUserDto): Promise<void> {
    await this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @Permissions(PERMISSIONS.DELETE_USER)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUser(@Param() { id }: UserIdParamDto): Promise<void> {
    await this.usersService.deleteUser(id);
  }
}
