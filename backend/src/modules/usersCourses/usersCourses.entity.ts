import { Course } from '@modules/courses/courses.entity';
import { User } from '@modules/users/users.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'usersCourses' })
export class UserCourse {
  @PrimaryGeneratedColumn('uuid', { name: 'users_courses_id' })
  id: string;

  @Column({
    name: 'status',
    type: 'varchar',
    length: 25,
    nullable: false,
  })
  status: string;

  @ManyToOne(() => User, (user) => user.id)
  userId: string;

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
