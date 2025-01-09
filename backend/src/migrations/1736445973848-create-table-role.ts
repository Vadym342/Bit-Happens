import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableRole1736445973848 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE roles (
                id UUID PRIMARY KEY,
                name VARCHAR(25) NOT NULL,
                description VARCHAR(100) NOT NULL,
                created_at VARCHAR(25) NOT NULL,
                updated_at VARCHAR(25) NULL,
                deleted_at VARCHAR(25) NULL
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE roles;`);
  }
}
