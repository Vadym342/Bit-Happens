import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableLearningHistories1736856652721 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE learningHistories (
            id UUID DEFAULT uuid_generate_v4() NOT NULL,
            description VARCHAR(100) NULL,
            created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
            updated_at TIMESTAMPTZ DEFAULT NULL,
            deleted_at TIMESTAMPTZ DEFAULT NULL,
            CONSTRAINT pk_learning_histories PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE learningHistories;`);
  }
}
