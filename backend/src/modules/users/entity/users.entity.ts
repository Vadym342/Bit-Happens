import { Course } from '@modules/courses/entities/courses.entity';
import { Favorites } from '@modules/favorites/favorites.entity';
import { LearningHistory } from '@modules/learningHistories/learningHistories.entity';
import { Role } from '@modules/role/role.entity';
import { UserCourse } from '@modules/usersCourses/usersCourses.entity';
import { Wishlist } from '@modules/wishlists/wishlists.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @Column({
    name: 'first_name',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  firstName: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  lastName: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 40,
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    name: 'age',
    type: 'int',
    nullable: false,
  })
  age: number;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  password: string;

  @Column({
    name: 'balance',
    type: 'real',
    default: 0,
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

  @ManyToOne(() => Role, (role) => role.id)
  @JoinColumn({ name: 'role_id' })
  roleId: string;

  @OneToOne(() => Favorites, (favorites) => favorites.id)
  @JoinColumn({ name: 'favorites_id' })
  favoritesId: string;

  @OneToOne(() => LearningHistory, (learningHistories) => learningHistories.id)
  @JoinColumn({ name: 'learning_history_id' })
  learningHistoryId: string;

  @OneToOne(() => Wishlist, (wishlist) => wishlist.id)
  @JoinColumn({ name: 'wishlist_id' })
  wishlistId: string;

  @OneToMany(() => Course, (course) => course.id)
  courses: Course[];

  @OneToMany(() => UserCourse, (userCourse) => userCourse.id)
  userCourses: UserCourse[];
}
