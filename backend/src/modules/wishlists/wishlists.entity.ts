import { User } from '@modules/users/entity/users.entity';
import { WishlistCourse } from '@modules/wishlistsCourses/wishlistsCourses.entity';
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User } from '@modules/users/users.entity';
import { WishlistCourse } from '@modules/wishlistsCourses/wishlistsCourses.entity';

@Entity({ name: 'wishlists' })
export class Wishlist {
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

  @OneToMany(() => WishlistCourse, (wishlistCourse) => wishlistCourse.wishlistId)
  wishlistCourses: WishlistCourse[];

  @OneToOne(() => User, (user) => user.wishlistId)
  user: User;
}
