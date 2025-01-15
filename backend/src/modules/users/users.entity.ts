import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn('uuid', {
    name: 'user_id',
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  first_name: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  last_name: string;

  @Column({
    type: 'varchar',
    length: 40,
    nullable: false,
  })
  email: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  age: number;

  @Column({
    type: 'varchar',
    length: 40,
    nullable: false,
  })
  password: string;

  @Column({
    type: 'real',
    nullable: false,
  })
  balance: number;

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
