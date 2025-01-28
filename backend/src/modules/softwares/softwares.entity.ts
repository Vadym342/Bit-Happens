import { SoftwareCourse } from '@modules/softwaresCourses/softwaresCourses.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'softwares' })
export class Software {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    name: 'description',
    type: 'varchar',
    length: 1000,
    nullable: false,
  })
  description: string;

  @Column({
    name: 'system_requirements',
    type: 'varchar',
    length: 250,
    nullable: false,
  })
  systemRequirements: string;

  @Column({
    name: 'version',
    type: 'varchar',
    length: 200,
    nullable: false,
  })
  version: string;

  @Column({
    name: 'download_link',
    type: 'varchar',
    length: 500,
    nullable: false,
  })
  downloadLink: string;

  @Column({
    name: 'logo_image',
    type: 'varchar',
    length: 200,
    nullable: false,
  })
  logoImage: string;

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

  @OneToMany(() => SoftwareCourse, (softwareCourse) => softwareCourse.softwareId)
  softwareCourses: SoftwareCourse[];
}
