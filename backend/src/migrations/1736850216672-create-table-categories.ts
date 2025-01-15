import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCategories1736850216672 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE categories (
            id UUID,
            name VARCHAR(50) NOT NULL,
            description VARCHAR(100) NOT NULL,
            created_at VARCHAR(25) NOT NULL,
            updated_at VARCHAR(25) NULL,
            deleted_at VARCHAR(25) NULL,
            administrator_id UUID NULL,
            CONSTRAINT pk_categories PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE categories;`);
  }
}
