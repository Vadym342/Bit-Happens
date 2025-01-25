import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCourses1737200576518 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE courses (
        id UUID DEFAULT uuid_generate_v4() NOT NULL,
        wishlist_id UUID DEFAULT uuid_generate_v4() NOT NULL,
        title VARCHAR(150) NOT NULL,
        description VARCHAR(150) NOT NULL,
        content TEXT NOT NULL,
        rating REAL NULL,
        logo_image VARCHAR(50) NULL,
        price MONEY NOT NULL,
        category_id UUID NOT NULL,
        created_at VARCHAR(25) NOT NULL,
        updated_at VARCHAR(25) NULL,
        deleted_at VARCHAR(25) NULL,
        CONSTRAINT pk_courses PRIMARY KEY (id),
        CONSTRAINT fk_courses_category_id FOREIGN KEY (category_id) REFERENCES categories (id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE courses;`);
  }
}
