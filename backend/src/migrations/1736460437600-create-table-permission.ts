import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePermission1736460437600 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE permissions (
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
    await queryRunner.query(`DROP TABLE permissions;`);
  }
}
