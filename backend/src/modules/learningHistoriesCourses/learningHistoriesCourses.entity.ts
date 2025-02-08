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
import { LearningHistory } from '@modules/learningHistories/learningHistories.entity';

@Entity({ name: 'learningHistoriesCourses' })
export class LearningHistoriesCourses {
  @PrimaryGeneratedColumn('uuid', {
    name: 'learning_history_course_id',
  })
  id: string;

  @Column({
    name: 'status',
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  status: string;

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

  @ManyToOne(() => LearningHistory, (learningHistory) => learningHistory.id)
  @JoinColumn({ name: 'learning_history_id' })
  learningHistoryId: string;

  @ManyToOne(() => Course, (course) => course.id)
  @JoinColumn({ name: 'course_id' })
  courseId: string;
}
