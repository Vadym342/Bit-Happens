import { LearningHistoriesCourses } from '@modules/learningHistoriesCourses/learningHistoriesCourses.entity';
import { User } from '@modules/users/users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'learningHistories' })
export class LearningHistory {
  @PrimaryGeneratedColumn('uuid', {
    name: 'learning_history_id',
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  description: string | null;

  @OneToMany(() => LearningHistoriesCourses, (learningHistoriesCourses) => learningHistoriesCourses.id)
  learningHistoriesCourses: LearningHistoriesCourses[];

  @OneToOne(() => User, (user) => user.learningHistoryId)
  user: User;

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
