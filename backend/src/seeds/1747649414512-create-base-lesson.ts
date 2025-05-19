import { MigrationInterface, QueryRunner } from 'typeorm';
import { seedLessons } from './constants/seed.constants';

export class CreateBaseLesson1747649414512 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const mappedlesson = seedLessons
      .map((lesson) => {
        return `('${lesson.id}', '${lesson.title}', '${lesson.content}', '${lesson.description}', '${lesson.createdAt.toISOString()}', '${lesson.courseId}')`;
      })
      .join();

    await queryRunner.query(`
                          INSERT INTO lessons (id, title, content, description, created_at, course_id)
                          VALUES
                          ${mappedlesson}
                        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const lessonToDelete = seedLessons
      .map((lesson) => {
        return `'${lesson.id}'`;
      })
      .join();

    await queryRunner.query(`
                      DELETE FROM lessons
                      WHERE id IN (${lessonToDelete});
                    `);
  }
}
