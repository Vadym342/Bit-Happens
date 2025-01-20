import { SoftwareCourse } from '@modules/softwaresCourses/softwaresCourses.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'softwares' })
export class Software {
  @PrimaryGeneratedColumn('uuid', {
    name: 'software_id',
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 250,
    nullable: false,
  })
  systemRequirements: string;

  @Column({
    type: 'varchar',
    length: 200,
    nullable: false,
  })
  version: string;

  @Column({
    type: 'varchar',
    length: 500,
    nullable: false,
  })
  downloadLink: string;

  @Column({
    type: 'varchar',
    length: 200,
    nullable: false,
  })
  logoImage: string;

  @OneToMany(() => SoftwareCourse, (softwareCourse) => softwareCourse.softwareId)
  softwareCourses: SoftwareCourse[];

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
