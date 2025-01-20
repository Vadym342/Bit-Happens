import { Category } from '@modules/categories/categories.entity';
import { LearningHistoriesCourses } from '@modules/learningHistoriesCourses/learningHistoriesCourses.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'courses' })
export class Course {
  @PrimaryGeneratedColumn('uuid', {
    name: 'course_id',
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

  @Column('uuid', {
    name: 'teacher_id',
  })
  teacherId: string;

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

  @ManyToOne(() => Category, (category) => category.id)
  categoryId: string;

  @OneToMany(() => LearningHistoriesCourses, (learningHistoriesCourses) => learningHistoriesCourses.id)
  learningHistoriesCourses: LearningHistoriesCourses[];

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
