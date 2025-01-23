import { Course } from '@modules/courses/courses.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'discounts' })
export class Discount {
  @PrimaryGeneratedColumn('uuid', {
    name: 'discount_id',
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

  @OneToOne(() => Course, (course) => course.id)
  course: string;

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
}
