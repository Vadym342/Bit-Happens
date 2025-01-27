import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableLessons1737226029330 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE lessons (
            id UUID DEFAULT uuid_generate_v4() NOT NULL,
            course_id UUID NOT NULL,
            title VARCHAR(150) NOT NULL,
            content TEXT NOT NULL,
            description VARCHAR(400) NOT NULL,
            created_at VARCHAR(25) NOT NULL,
            updated_at VARCHAR(25) NULL,
            deleted_at VARCHAR(25) NULL,
            CONSTRAINT pk_lessons PRIMARY KEY (id),
            CONSTRAINT fk_lessons_course_id FOREIGN KEY (course_id) REFERENCES courses (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE lessons;`);
  }
}
