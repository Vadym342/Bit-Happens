import { Role } from '@modules/roles/roles.entity';

export const seedRoles: Partial<Role>[] = [
  {
    id: '01ed41cf-e065-4ef9-b3c7-b47055808f0a',
    name: 'administrator',
    description: 'The Administrator role has full access to all system features and settings',
    createdAt: new Date('2025-03-17T15:41:48.023Z'),
    updatedAt: null,
    deletedAt: null,
    rolesPermissions: [],
  },
];

// The same for static admin users
