import { Course } from '@modules/courses/courses.entity';
import { Software } from '@modules/softwares/softwares.entity';
import { CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'softwaresCourses' })
export class SoftwareCourse {
  @PrimaryGeneratedColumn('uuid', {
    name: 'software_course_id',
  })
  id: string;

  @ManyToOne(() => Software, (software) => software.id)
  softwareId: string;

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
