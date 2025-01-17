import { RolesPermissions } from '@modules/rolesPermissions/rolesPermissions.entity';
import { User } from '@modules/users/users.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'roles' })
export class Role {
  @PrimaryGeneratedColumn('uuid', {
    name: 'role_id',
  })
  id: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 25,
    nullable: false,
  })
  name: string;

  @Column({
    name: 'description',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  description: string;

  @OneToMany(() => RolesPermissions, (rolesPermissions) => rolesPermissions.roleId)
  rolesPermissions: RolesPermissions[];

  @OneToMany(() => User, (user) => user.roleId)
  users: User[];

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
}
