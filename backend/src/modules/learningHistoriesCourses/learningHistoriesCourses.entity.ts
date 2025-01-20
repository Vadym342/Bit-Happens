import { Course } from '@modules/courses/courses.entity';
import { LearningHistory } from '@modules/learningHistories/learningHistories.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

  @ManyToOne(() => LearningHistory, (learningHistory) => learningHistory.id)
  learningHistoryId: string;

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
