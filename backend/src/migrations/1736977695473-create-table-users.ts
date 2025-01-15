import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUsers1736977695473 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE users (
            id UUID,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100) NOT NULL,
            email VARCHAR(40) NOT NULL,
            age INT NOT NULL,
            passward VARCHAR(40) NOT NULL,
            balance REAL NOT NULL,
            created_at VARCHAR(25) NOT NULL,
            updated_at VARCHAR(25) NULL,
            deleted_at VARCHAR(25) NULL
            CONSTRAINT pk_users PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
