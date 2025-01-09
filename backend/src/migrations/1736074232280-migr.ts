import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migr1736074232280 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE test3 (
                id SERIAL NOT NULL, 
                name VARCHAR(100) NOT NULL 
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE test3;`);
  }
}
