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

import { Course } from '@modules/courses/entities/courses.entity';
import { Wishlist } from '@modules/wishlists/wishlists.entity';

@Entity({ name: 'wishlistsCourses' })
export class WishlistCourse {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @Column({
    name: 'status',
    type: 'varchar',
    length: 25,
    nullable: false,
  })
  status: string;

  @Column({
    name: 'priority',
    type: 'int',
    nullable: false,
  })
  priority: number;

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

  @ManyToOne(() => Wishlist, (wishlist) => wishlist.id)
  @JoinColumn({ name: 'wishlist_id' })
  wishlistId: string;

  @ManyToOne(() => Course, (course) => course.id)
  @JoinColumn({ name: 'course_id' })
  courseId: string;
}
