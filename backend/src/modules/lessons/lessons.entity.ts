import { Comment } from '@modules/comments/comments.entity';
import { Course } from '@modules/courses/courses.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'lessons' })
export class Lesson {
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
    name: 'content',
    type: 'text',
    nullable: false,
  })
  content: string;

  @Column({
    name: 'description',
    type: 'varchar',
    length: 400,
    nullable: false,
  })
  description: string;

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

  @OneToMany(() => Comment, (comment) => comment.id)
  commentId: Comment[];

  @ManyToOne(() => Course, (course) => course.id)
  @JoinColumn({ name: 'course_id' })
  courseId: string;
}
