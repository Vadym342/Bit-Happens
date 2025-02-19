import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBaseUser1739807819082 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO users (first_name, last_name, email, age, password, role_id)
      VALUES
      ('Admin Name', 'Admin LastName', 'admin@gmail.com', '19', '$argon2id$v=19$m=65536,t=3,p=4$zjYa4x4BV6rZg1JSWiuujg$vJa/uupjzGZBuBGnxJ3DeusbImJSuoaDOMNgI9MiMwo', '01ed41cf-e065-4ef9-b3c7-b47055808f0a');
    `); //password: 111111
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM users 
      WHERE email IN ('admin@gmail.com');
    `);
  }
}
