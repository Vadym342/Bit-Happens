import { Category } from '@modules/categories/entities/category.entity';
import { Role } from '@modules/roles/roles.entity';
import { User } from '@modules/users/entity/users.entity';

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
  {
    id: '2b1e8b62-a6cd-4665-b18d-2e3638347cff',
    name: 'user',
    description: 'The User role has limited access.',
    createdAt: new Date('2025-03-17T15:41:48.023Z'),
    updatedAt: null,
    deletedAt: null,
    rolesPermissions: [],
  },
  {
    id: '4a67bc7b-8605-47e3-94f4-9229af841fe4',
    name: 'teacher',
    description: 'The Teacher role has access to all features and settings related to courses and student management.',
    createdAt: new Date('2025-03-17T15:41:48.023Z'),
    updatedAt: null,
    deletedAt: null,
    rolesPermissions: [],
  },
];

export const seedUser: Partial<User>[] = [
  {
    id: 'c05dc95c-ea95-4059-b33c-e5ad1e2839ad',
    firstName: 'Admin',
    lastName: 'Admin',
    email: 'admin@gmail.com',
    age: 25,
    password: '$argon2id$v=19$m=65536,t=3,p=4$zjYa4x4BV6rZg1JSWiuujg$vJa/uupjzGZBuBGnxJ3DeusbImJSuoaDOMNgI9MiMwo',
    balance: 0,
    roleId: '01ed41cf-e065-4ef9-b3c7-b47055808f0a',
    favoritesId: null,
    learningHistoryId: null,
    wishlistId: null,
    createdAt: new Date('2025-03-17T15:41:48.023Z'),
    updatedAt: null,
    deletedAt: null,
  },
];
