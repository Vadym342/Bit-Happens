import { Category } from '@modules/categories/categories.entity';
import { Discount } from '@modules/discounts/discounts.entity';
import { FavoritesCourses } from '@modules/favoritesCourses/favoritesCourses.entity';
import { LearningHistoriesCourses } from '@modules/learningHistoriesCourses/learningHistoriesCourses.entity';
import { Lesson } from '@modules/lessons/lessons.entity';
import { SoftwareCourse } from '@modules/softwaresCourses/softwaresCourses.entity';
import { User } from '@modules/users/users.entity';
import { UserCourse } from '@modules/usersCourses/usersCourses.entity';
import { WishlistCourse } from '@modules/wishlistsCourses/wishlistsCourses.entity';
import { Software } from '@modules/softwares/softwares.entity';
import { SoftwareCourse } from '@modules/softwaresCourses/softwaresCourses.entity';
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

@Entity({ name: 'courses' })
export class Course {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @Column({
    name: 'title',
    type: 'varchar',
    length: 150,
    nullable: false,
  })
  name: string;

  @Column({
    name: 'description',
    type: 'text',
    nullable: false,
  })
  description: string;

  @Column({
    name: 'content',
    type: 'text',
    nullable: false,
  })
  content: string;

  @Column({
    name: 'rating',
    type: 'real',
    nullable: false,
  })
  rating: number;

  @Column({
    name: 'logo_image',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  logoImage: string;

  @Column({
    name: 'price',
    type: 'money',
    nullable: false,
  })
  price: number;

  @OneToMany(() => SoftwareCourse, (softwareCourse) => softwareCourse.id)
  softwareCourses: SoftwareCourse[];

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

  @ManyToOne(() => Category, (category) => category.id)
  @JoinColumn({ name: 'category_id' })
  categoryId: string;

  @OneToMany(() => Lesson, (lesson) => lesson.id)
  lessons: Lesson[];

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'teacher_id' })
  teacherId: string;

  @OneToOne(() => Discount, (discount) => discount.id)
  discount: string;

  @OneToMany(() => WishlistCourse, (wishlistCourse) => wishlistCourse.wishlistId)
  wishlistCourses: WishlistCourse[];

  @OneToMany(() => LearningHistoriesCourses, (learningHistoriesCourses) => learningHistoriesCourses.id)
  learningHistoriesCourses: LearningHistoriesCourses[];

  @OneToMany(() => SoftwareCourse, (softwareCourse) => softwareCourse.id)
  softwareCourses: SoftwareCourse[];

  @OneToMany(() => FavoritesCourses, (favoritesCourses) => favoritesCourses.id)
  favoritesCourses: FavoritesCourses[];

  @OneToMany(() => UserCourse, (userCourse) => userCourse.id)
  userCourses: UserCourse[];
}
