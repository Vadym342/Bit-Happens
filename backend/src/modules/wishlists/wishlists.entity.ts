import { WishlistCourse } from '@modules/wishlistsCourses/wishlistsCourses.entity';
import { CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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
}
