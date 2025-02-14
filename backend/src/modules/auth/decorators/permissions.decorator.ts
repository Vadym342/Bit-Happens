import { applyDecorators, SetMetadata } from '@nestjs/common';
import { PermissionsType } from '@modules/auth/roles/permissions';

export const PERMISSIONS_KEY = 'permissions';

export function Permissions(...permissions: PermissionsType[]): MethodDecorator {
  return applyDecorators(SetMetadata(PERMISSIONS_KEY, permissions));
}
