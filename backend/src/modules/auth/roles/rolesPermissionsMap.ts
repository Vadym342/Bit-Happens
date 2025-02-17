import { PERMISSIONS, PermissionsType } from './permissions';
import { SYSTEM_ROLES } from './roles.constant';

type RolesPermissionsMap = {
  [roleName: string]: PermissionsType[];
};

export const ROLE_PERMISSIONS_MAP: RolesPermissionsMap = {
  [SYSTEM_ROLES.ADMINISTRATOR.name]: [
    PERMISSIONS.CREATE_COURSE,
    PERMISSIONS.UPDATE_COURSE,
    PERMISSIONS.DELETE_COURSE,
    PERMISSIONS.VIEW_ONE_COURSE,
    PERMISSIONS.VIEW_ALL_COURSES,
    PERMISSIONS.CREATE_LESSON,
    PERMISSIONS.UPDATE_LESSON,
    PERMISSIONS.DELETE_LESSON,
    PERMISSIONS.CREATE_USER,
    PERMISSIONS.UPDATE_USER,
    PERMISSIONS.DELETE_USER,
    PERMISSIONS.CREATE_CATEGORY,
    PERMISSIONS.UPDATE_CATEGORY,
    PERMISSIONS.DELETE_CATEGORY,
    PERMISSIONS.CREATE_SOFTWARE,
    PERMISSIONS.UPDATE_SOFTWARE,
    PERMISSIONS.DELETE_SOFTWARE,
  ],
  [SYSTEM_ROLES.TEACHER.name]: [
    PERMISSIONS.CREATE_COURSE,
    PERMISSIONS.UPDATE_COURSE,
    PERMISSIONS.DELETE_COURSE,
    PERMISSIONS.VIEW_ONE_COURSE,
    PERMISSIONS.VIEW_ALL_COURSES,
    PERMISSIONS.CREATE_LESSON,
    PERMISSIONS.UPDATE_LESSON,
    PERMISSIONS.DELETE_LESSON,
  ],
  [SYSTEM_ROLES.USER.name]: [PERMISSIONS.UPDATE_USER, PERMISSIONS.VIEW_ONE_COURSE, PERMISSIONS.VIEW_ALL_COURSES],
};
