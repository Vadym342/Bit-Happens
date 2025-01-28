import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableSoftwaresCourses1737368808124 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE softwaresCourses (
        id UUID DEFAULT uuid_generate_v4() NOT NULL,
        software_id UUID NOT NULL,
        course_id UUID NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT NULL,
        deleted_at TIMESTAMPTZ DEFAULT NULL,
        CONSTRAINT pk_softwares_courses PRIMARY KEY (id),
        CONSTRAINT fk_softwares_courses_software_id FOREIGN KEY (software_id) REFERENCES softwares (id),
        CONSTRAINT fk_softwares_courses_course_id FOREIGN KEY (course_id) REFERENCES courses (id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE softwaresCourses;`);
  }
}
