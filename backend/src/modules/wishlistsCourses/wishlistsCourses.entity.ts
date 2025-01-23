import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Course } from '@modules/courses/courses.entity';
import { Wishlist } from '@modules/wishlists/wishlists.entity';

@Entity({ name: 'wishlistsCourses' })
export class WishlistCourse {
  @PrimaryGeneratedColumn('uuid', {
    name: 'wishlists_courses_id',
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

  @ManyToOne(() => Wishlist, (wishlist) => wishlist.id)
  wishlistId: string;

  @ManyToOne(() => Course, (course) => course.id)
  courseId: string;

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
