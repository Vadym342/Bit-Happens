export class PermissionsType {
  name: string;
  description: string;
}

export const PERMISSIONS: { [key: string]: PermissionsType } = {
  CREATE_COURSE: {
    name: 'create:course',
    description: 'Create a new course.',
  },
  UPDATE_COURSE: {
    name: 'update:course',
    description: 'Update an existing course.',
  },
  DELETE_COURSE: {
    name: 'delete:course',
    description: 'Delete an existing course.',
  },
  VIEW_ONE_COURSE: {
    name: 'view:one:course',
    description: 'View one course.',
  },
  VIEW_ALL_COURSES: {
    name: 'view:all:courses',
    description: 'View all courses.',
  },
  CREATE_LESSON: {
    name: 'create:lesson',
    description: 'Create a new lesson.',
  },
  UPDATE_LESSON: {
    name: 'update:lesson',
    description: 'Update an existing lesson.',
  },
  DELETE_LESSON: {
    name: 'delete:lesson',
    description: 'Delete an existing lesson.',
  },
  CREATE_USER: {
    name: 'create:user',
    description: 'Create a new user.',
  },
  UPDATE_USER: {
    name: 'update:user',
    description: 'Update an existing user.',
  },
  DELETE_USER: {
    name: 'delete:user',
    description: 'Delete an existing user.',
  },
  CREATE_CATEGORY: {
    name: 'create:category',
    description: 'Create a new category.',
  },
  UPDATE_CATEGORY: {
    name: 'update:category',
    description: 'Update an existing category.',
  },
  DELETE_CATEGORY: {
    name: 'delete:category',
    description: 'Delete an existing category.',
  },
  CREATE_SOFTWARE: {
    name: 'create:software',
    description: 'Create a new software.',
  },
  UPDATE_SOFTWARE: {
    name: 'update:software',
    description: 'Update an existing software.',
  },
  DELETE_SOFTWARE: {
    name: 'delete:software',
    description: 'Delete an existing software.',
  },
};
