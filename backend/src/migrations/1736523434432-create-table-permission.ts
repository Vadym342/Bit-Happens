import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePermission1736523434432 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE permissions (
            id UUID,
            name VARCHAR(50) NOT NULL,
            description VARCHAR(100) NOT NULL,
            created_at VARCHAR(25) NOT NULL,
            updated_at VARCHAR(25) NULL,
            deleted_at VARCHAR(25) NULL,
            CONSTRAINT pk_permissions PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE permissions;`);
  }
}
