import { CanActivate, ExecutionContext, Injectable, BadRequestException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/modules/auth/decorators/roles.decorator';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    return true;
  }
}
//з токену дістати id, використовуючи id дістати юзера з ролями та пермішенами. Через рефлектор дістати пермішени які ми навішуемо на енд поінти (const об'єкт, що містить список ролей з пермішенами)
