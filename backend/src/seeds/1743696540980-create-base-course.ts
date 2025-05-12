import { MigrationInterface, QueryRunner } from 'typeorm';

import { seedCourse } from './constants/seed.constants';

export class CreateBaseCourse1743696540980 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const mappedCourse = seedCourse
      .map((course) => {
        return `('${course.id}', '${course.title}', '${course.description}', '${course.content}', '${course.price}', '${course.logoImage}', '${course.categoryId}', '${course.teacherId}', '${course.createdAt.toISOString()}')`;
      })
      .join();

    await queryRunner.query(`
                  INSERT INTO courses (id, title, description, content, price, logo_image, category_id, teacher_id, created_at)
                  VALUES
                  ${mappedCourse}
                `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const courseToDelete = seedCourse
      .map((course) => {
        return `'${course.id}'`;
      })
      .join();

    await queryRunner.query(`
              DELETE FROM courses
              WHERE id IN (${courseToDelete});
            `);
  }
}
