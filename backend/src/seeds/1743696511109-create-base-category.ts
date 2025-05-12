import { MigrationInterface, QueryRunner } from 'typeorm';

import { seedCategory } from './constants/seed.constants';

export class CreateBaseCategory1743696511109 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const mappedCategory = seedCategory
      .map((category) => {
        return `('${category.id}', '${category.name}', '${category.description}', '${category.createdAt.toISOString()}')`;
      })
      .join();

    await queryRunner.query(`
          INSERT INTO categories (id, name, description, created_at)
          VALUES
          ${mappedCategory}
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const categoryToDelete = seedCategory
      .map((category) => {
        return `'${category.id}'`;
      })
      .join();

    await queryRunner.query(`
          DELETE FROM categories 
          WHERE id IN (${categoryToDelete});
        `);
  }
}
