import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCategories1736850216672 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE categories (
            id UUID DEFAULT uuid_generate_v4() NOT NULL,
            name VARCHAR(50) NOT NULL,
            description VARCHAR(100) NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
            updated_at TIMESTAMPTZ DEFAULT NULL,
            deleted_at TIMESTAMPTZ DEFAULT NULL,
            administrator_id UUID NULL,
            CONSTRAINT pk_categories PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE categories;`);
  }
}
