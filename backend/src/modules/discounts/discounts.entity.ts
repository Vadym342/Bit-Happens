import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Course } from '@modules/courses/entities/course.entity';

@Entity({ name: 'discounts' })
export class Discount {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @Column({
    name: 'discount_percentage',
    type: 'real',
    nullable: true,
  })
  discountPercentage: number | null;

  @Column({
    name: 'start_date',
    type: 'varchar',
    length: 25,
    nullable: false,
  })
  startDate: string;

  @Column({
    name: 'end_date',
    type: 'varchar',
    length: 25,
    nullable: false,
  })
  endDate: string;

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

  @OneToOne(() => Course, (course) => course.id)
  @JoinColumn({ name: 'course_id' })
  course: string;
}
