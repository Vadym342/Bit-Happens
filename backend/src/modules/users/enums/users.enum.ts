import { seedRoles } from '../../../seeds/constants/seed.constants';

export const userRoleIdEnum = {
  STUDENT: seedRoles.find((role) => role.name === 'user')?.id,
  TEACHER: seedRoles.find((role) => role.name === 'teacher')?.id,
};

export const ROLE_MAP: Record<string, string> = {
  student: userRoleIdEnum.STUDENT,
  teacher: userRoleIdEnum.TEACHER,
};

export type UserRoleIdEnum = (typeof userRoleIdEnum)[keyof typeof userRoleIdEnum];
