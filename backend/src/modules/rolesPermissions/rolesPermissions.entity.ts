import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Permission } from '@modules/permission/permission.entity';
import { Role } from '@modules/role/role.entity';

@Entity({ name: 'rolesPermissions' })
export class RolesPermissions {
  @PrimaryGeneratedColumn('uuid', {
    name: 'role_permission_id',
  })
  id: string;

  @ManyToOne(() => Role, (role) => role.id)
  roleId: string;

  @ManyToOne(() => Permission, (permission) => permission.id)
  permissionId: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    nullable: true,
  })
  updatedAt: Date | null;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamptz',
    nullable: true,
  })
  deletedAt: Date | null;

  @Column('uuid', {
    name: 'administrator_id',
    nullable: true,
  })
  administratorId: string | null;
}
