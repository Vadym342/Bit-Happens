import { Permission } from '@modules/permissions/permissions.entity';
import { Role } from '@modules/roles/roles.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'rolesPermissions' })
export class RolesPermissions {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

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

  @ManyToOne(() => Role, (role) => role.id)
  @JoinColumn({ name: 'role_id' })
  roleId: string;

  @ManyToOne(() => Permission, (permission) => permission.id)
  @JoinColumn({ name: 'permission_id' })
  permissionId: string;
}
