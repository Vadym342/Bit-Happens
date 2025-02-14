export class Roles {
  id: string;
  name: string;
  description: string;
}

export const SYSTEM_ROLES: { [key: string]: Roles } = {
  ADMINISTRATOR: {
    id: '01ed41cf-e065-4ef9-b3c7-b47055808f0a',
    name: 'administrator',
    description: 'The Administrator role has full access to all system features and settings.',
  },
  TEACHER: {
    id: '4a67bc7b-8605-47e3-94f4-9229af841fe4',
    name: 'teacher',
    description: 'The Teacher role has access to all features and settings related to courses and student management.',
  },
  USER: {
    id: '2b1e8b62-a6cd-4665-b18d-2e3638347cff',
    name: 'user',
    description: 'The Гser role has limited access.',
  },
};
