export enum userRoleIdEnum {
  STUDENT = '2b1e8b62-a6cd-4665-b18d-2e3638347cff', // id from static seedRoles, mb use object instead
  TEACHER = '4a67bc7b-8605-47e3-94f4-9229af841fe4',
}

export const ROLE_MAP: Record<string, string> = {
  student: userRoleIdEnum.STUDENT,
  teacher: userRoleIdEnum.TEACHER,
};
