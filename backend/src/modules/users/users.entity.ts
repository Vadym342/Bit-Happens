import { Favorites } from '@modules/favorites/favorites.entity';
import { LearningHistory } from '@modules/learningHistories/learningHistories.entity';
import { Role } from '@modules/role/role.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid', {
    name: 'user_id',
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  lastName: string;

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

  @ManyToOne(() => Role, (role) => role.id)
  roleId: string;

  @OneToOne(() => Favorites, (favorites) => favorites.id)
  favoritesId: string;

  @OneToOne(() => LearningHistory, (learningHistories) => learningHistories.id)
  learningHistoryId: string;

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
