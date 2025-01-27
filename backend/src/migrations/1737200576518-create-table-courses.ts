import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCourses1737200576518 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE courses (
        id UUID DEFAULT uuid_generate_v4() NOT NULL,
        teacher_id UUID NOT NULL,
        title VARCHAR(150) NOT NULL,
        description VARCHAR(150) NOT NULL,
        content TEXT NOT NULL,
        rating REAL NULL,
        logo_image VARCHAR(50) NULL,
        price MONEY NOT NULL,
        category_id UUID NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT NULL,
        deleted_at TIMESTAMPTZ DEFAULT NULL,
        CONSTRAINT pk_courses PRIMARY KEY (id),
        CONSTRAINT fk_courses_category_id FOREIGN KEY (category_id) REFERENCES categories (id),
        CONSTRAINT fk_courses_teacher_id FOREIGN KEY (teacher_id) REFERENCES users (id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE courses;`);
  }
}
