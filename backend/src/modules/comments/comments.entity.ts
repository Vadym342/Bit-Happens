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

import { Lesson } from '@modules/lessons/lessons.entity';

@Entity({ name: 'comments' })
export class Comment {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @Column({
    name: 'content',
    type: 'text',
    nullable: false,
  })
  content: string;

  @Column('uuid', {
    name: 'user_id',
    nullable: false,
  })
  userId: string;

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

  @Column('uuid', {
    name: 'administrator_id',
    nullable: true,
  })
  administratorId: string | null;

  @ManyToOne(() => Lesson, (lesson) => lesson.id)
  @JoinColumn({ name: 'lesson_id' })
  lessonId: string;
}
