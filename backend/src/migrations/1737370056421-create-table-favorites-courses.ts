import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableFavoritesCourses1737370056421 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE favoritesCourses (
        id UUID DEFAULT uuid_generate_v4() NOT NULL,
        favorite_id UUID NOT NULL,
        course_id UUID NOT NULL,
        status VARCHAR(20) NOT NULL,
        created_at VARCHAR(25) NOT NULL,
        updated_at VARCHAR(25) NULL,
        deleted_at VARCHAR(25) NULL,
        CONSTRAINT pk_favorites_courses PRIMARY KEY (id),
        CONSTRAINT fk_favorites_courses_favorite_id FOREIGN KEY (favorite_id) REFERENCES favorites (id),
        CONSTRAINT fk_favorites_courses_course_id FOREIGN KEY (course_id) REFERENCES courses (id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE favoritesCourses;`);
  }
}
