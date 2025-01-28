import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePermission1736523434432 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE permissions (
            id UUID DEFAULT uuid_generate_v4() NOT NULL,
            name VARCHAR(50) NOT NULL,
            description VARCHAR(100) NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
            updated_at TIMESTAMPTZ DEFAULT NULL,
            deleted_at TIMESTAMPTZ DEFAULT NULL,
            CONSTRAINT pk_permissions PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE permissions;`);
  }
}
