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

import { User } from '@modules/users/entity/users.entity';
import { LearningHistoriesCourses } from '@modules/learningHistoriesCourses/learningHistoriesCourses.entity';
import { User } from '@modules/users/users.entity';

@Entity({ name: 'learningHistories' })
export class LearningHistory {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @Column({
    name: 'description',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  description: string | null;

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

  @OneToMany(() => LearningHistoriesCourses, (learningHistoriesCourses) => learningHistoriesCourses.learningHistoryId)
  learningHistoriesCourses: LearningHistoriesCourses[];

  @OneToOne(() => User, (user) => user.learningHistoryId)
  user: User;
}
