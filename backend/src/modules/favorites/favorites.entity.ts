import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { FavoritesCourses } from '@modules/favoritesCourses/favoritesCourses.entity';
import { User } from '@modules/users/entity/users.entity';

@Entity({ name: 'favorites' })
export class Favorites {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @Column({
    name: 'description',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  description: string | null;

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

  @OneToOne(() => User, (user) => user.favoritesId)
  user: User;

  @OneToMany(() => FavoritesCourses, (favoritesCourses) => favoritesCourses.favoritesId)
  favoritesCourses: FavoritesCourses[];
}
