import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableFavorites1736976730340 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE favorites (
            id UUID DEFAULT uuid_generate_v4() NOT NULL,
            description VARCHAR(100) NULL,
            created_at VARCHAR(25) NOT NULL,
            updated_at VARCHAR(25) NULL,
            deleted_at VARCHAR(25) NULL,
            CONSTRAINT pk_favorites PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE favorites;`);
  }
}
