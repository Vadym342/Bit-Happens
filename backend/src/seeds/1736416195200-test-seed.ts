import { MigrationInterface, QueryRunner } from 'typeorm';

export class TestSeed1736416195200 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO test3 (id, name)
            VALUES 
            (1, 'Test1'),
            (2, 'Test2');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM test3 
            WHERE id IN (1, 2);
        `);
  }
}
