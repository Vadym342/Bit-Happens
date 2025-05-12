import { MigrationInterface, QueryRunner } from 'typeorm';

import { seedUser } from './constants/seed.constants';

export class CreateBaseUser1739807819082 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const mappedUser = seedUser
      .map((user) => {
        return `('${user.id}', '${user.firstName}', '${user.lastName}', '${user.email}', '${user.age}', '${user.password}', '${user.roleId}', '${user.createdAt.toISOString()}')`;
      })
      .join();

    await queryRunner.query(`
      INSERT INTO users (id, first_name, last_name, email, age, password, role_id, created_at)
      VALUES
      ${mappedUser}
    `); //password: 111111
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const userToDelete = seedUser
      .map((user) => {
        return `'${user.id}'`;
      })
      .join();

    await queryRunner.query(`
      DELETE FROM users 
      WHERE id IN (${userToDelete});
    `);
  }
}
