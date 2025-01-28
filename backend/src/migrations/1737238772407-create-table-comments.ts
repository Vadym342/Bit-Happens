import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableComments1737238222990 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE comments (
            id UUID DEFAULT uuid_generate_v4() NOT NULL,
            lesson_id UUID NOT NULL,
            content TEXT NOT NULL,
            user_id UUID NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
            updated_at TIMESTAMPTZ DEFAULT NULL,
            deleted_at TIMESTAMPTZ DEFAULT NULL,
            administrator_id UUID NULL,
            CONSTRAINT pk_comments PRIMARY KEY (id),
            CONSTRAINT fk_comments_lesson_id FOREIGN KEY (lesson_id) REFERENCES lessons(id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE comments;`);
  }
}
