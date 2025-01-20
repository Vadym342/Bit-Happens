import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableLearningHistoriesCourses1737367817676 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE learningHistoriesCourses (
        id UUID DEFAULT uuid_generate_v4() NOT NULL,
        learning_history_id UUID NOT NULL,
        course_id UUID NOT NULL,
        status VARCHAR(20) NOT NULL,
        created_at VARCHAR(25) NOT NULL,
        updated_at VARCHAR(25) NULL,
        deleted_at VARCHAR(25) NULL,
        CONSTRAINT pk_learning_histories_courses PRIMARY KEY (id),
        CONSTRAINT fk_learning_histories_courses_learning_history_id FOREIGN KEY (learning_history_id) REFERENCES learningHistories (id),
        CONSTRAINT fk_learning_histories_courses_course_id FOREIGN KEY (course_id) REFERENCES courses (id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE learningHistoriesCourses;`);
  }
}
