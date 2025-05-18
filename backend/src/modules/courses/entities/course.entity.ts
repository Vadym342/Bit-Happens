import { Category } from '@modules/categories/entities/category.entity';
import { Discount } from '@modules/discounts/discounts.entity';
import { FavoritesCourses } from '@modules/favoritesCourses/favoritesCourses.entity';
import { LearningHistoriesCourses } from '@modules/learningHistoriesCourses/learningHistoriesCourses.entity';
import { Lesson } from '@modules/lessons/entities/lessons.entity';
import { SoftwareCourse } from '@modules/softwaresCourses/softwaresCourses.entity';
import { User } from '@modules/users/entity/users.entity';
import { UserCourse } from '@modules/usersCourses/entities/usersCourses.entity';
import { WishlistCourse } from '@modules/wishlistsCourses/wishlistsCourses.entity';
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
  title: string;

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
    nullable: true,
  })
  rating: number;

  @Column({
    name: 'logo_image',
    type: 'varchar',
    length: 1000,
    nullable: false,
  })
  logoImage: string;

  @Column({
    name: 'price',
    type: 'money',
    nullable: false,
  })
  price: number;

  @Column({ name: 'category_id' })
  categoryId: string;

  @Column({ name: 'teacher_id' })
  teacherId: string;

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

  @ManyToOne(() => Category, (category) => category.courses)
  @JoinColumn({ name: 'category_id' })
  category: Category[];

  @OneToMany(() => Lesson, (lesson) => lesson.id)
  lessons: Lesson[];

  @ManyToOne(() => User, (user) => user.courses)
  @JoinColumn({ name: 'teacher_id' })
  teacher: User[];

  @OneToOne(() => Discount, (discount) => discount.id)
  discount: number;

  @OneToMany(() => WishlistCourse, (wishlistCourse) => wishlistCourse.wishlistId)
  wishlistCourses: WishlistCourse[];

  @OneToMany(() => LearningHistoriesCourses, (learningHistoriesCourses) => learningHistoriesCourses.id)
  learningHistoriesCourses: LearningHistoriesCourses[];

  @OneToMany(() => SoftwareCourse, (softwareCourse) => softwareCourse.id)
  softwareCourses: SoftwareCourse[];

  @OneToMany(() => FavoritesCourses, (favoritesCourses) => favoritesCourses.id)
  favoritesCourses: FavoritesCourses[];

  @OneToMany(() => UserCourse, (userCourse) => userCourse.course)
  userCourses: UserCourse[];
}
