import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableLearningHistories1736856652721 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE learningHistories (
            id UUID PRIMARY KEY,
            description VARCHAR(100) NULL,
            created_at VARCHAR(25) NOT NULL,
            updated_at VARCHAR(25) NULL,
            deleted_at VARCHAR(25) NULL
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE learningHistories;`);
  }
}
