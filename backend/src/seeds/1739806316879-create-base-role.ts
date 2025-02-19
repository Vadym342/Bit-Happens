import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBaseRole1739806316879 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO roles (id, name, description)
      VALUES
      ('01ed41cf-e065-4ef9-b3c7-b47055808f0a', 'administrator', 'The Administrator role has full access to all system features and settings');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM roles 
      WHERE id IN ('01ed41cf-e065-4ef9-b3c7-b47055808f0a');
    `);
  }
}
