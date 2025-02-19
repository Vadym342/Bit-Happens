export class Roles {
  name: string;
  description: string;
}

export const SYSTEM_ROLES: { [key: string]: Roles } = {
  ADMINISTRATOR: {
    name: 'administrator',
    description: 'The Administrator role has full access to all system features and settings.',
  },
  TEACHER: {
    name: 'teacher',
    description: 'The Teacher role has access to all features and settings related to courses and student management.',
  },
  USER: {
    name: 'user',
    description: 'The User role has limited access.',
  },
};
