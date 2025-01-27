import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUserscourses1737468966281 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        create table usersCourses (
            id UUID DEFAULT uuid_generate_v4() NOT NULL,
            user_id UUID NOT NULL,
            course_id UUID NOT NULL,
            status VARCHAR(25) NOT NULL,
            created_at VARCHAR(25) NOT NULL,
            updated_at VARCHAR(25) NULL,
            deleted_at VARCHAR(25) NULL,
            CONSTRAINT pk_users_courses PRIMARY KEY (id),
            CONSTRAINT fk_users_courses_user_id FOREIGN KEY (user_id) REFERENCES users(id),
            CONSTRAINT fk_users_courses_course_id FOREIGN KEY (course_id) REFERENCES courses(id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE usersCourses;`);
  }
}
