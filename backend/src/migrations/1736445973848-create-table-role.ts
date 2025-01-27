import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableRole1736445973848 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE roles (
            id UUID DEFAULT uuid_generate_v4() NOT NULL,
            name VARCHAR(25) NOT NULL,
            description VARCHAR(100) NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
            updated_at TIMESTAMPTZ DEFAULT NULL,
            deleted_at TIMESTAMPTZ DEFAULT NULL,
            CONSTRAINT pk_roles PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE roles;`);
  }
}
