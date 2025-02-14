import { CanActivate, ExecutionContext, Injectable, BadRequestException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from '@modules/auth/decorators/permissions.decorator';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@modules/users/users.service';
import { ROLE_PERMISSIONS_MAP } from './rolesPermissionsMap';
import { PermissionsType } from './permissions';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.get<PermissionsType[]>(PERMISSIONS_KEY, context.getHandler());

    if (!requiredPermissions || requiredPermissions.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new BadRequestException('Token missing');
    }

    const token = authHeader.split(' ')[1];

    const decodedToken = this.jwtService.decode(token) as { id: string };

    if (!decodedToken || !decodedToken.id) {
      throw new BadRequestException('Invalid token');
    }

    const user = await this.usersService.findUserById(decodedToken.id);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const userPermissions = ROLE_PERMISSIONS_MAP[user.role.name] || [];
    const hasPermission = requiredPermissions.some((perm) => userPermissions.includes(perm));

    if (!hasPermission) {
      throw new BadRequestException('Not enough access rights');
    }

    return true;
  }
}
