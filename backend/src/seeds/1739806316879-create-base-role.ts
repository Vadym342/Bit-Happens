import { MigrationInterface, QueryRunner } from 'typeorm';
import { seedRoles } from './constants/seed.constants';

export class CreateBaseRole1739806316879 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const mappedRoles = seedRoles
      .map((role) => {
        return `('${role.id}', '${role.name}', '${role.description}', '${role.createdAt});`;
      })
      .join();

    await queryRunner.query(`
      INSERT INTO roles (id, name, description)
      VALUES
      ${mappedRoles}
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const rolesToDelete = seedRoles
      .map((role) => {
        return `'${role.id}'`;
      })
      .join();

    await queryRunner.query(`
      DELETE FROM roles 
      WHERE id IN (${rolesToDelete});
    `);
  }
}
