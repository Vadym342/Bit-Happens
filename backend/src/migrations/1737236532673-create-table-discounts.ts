import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableDiscounts1737236532673 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        create table discounts (
            id UUID DEFAULT uuid_generate_v4() NOT NULL,
            course_id UUID NOT NULL,
            discount_percentage REAL NULL,
            start_date VARCHAR(25) NOT NULL,
            end_date VARCHAR(20) NOT NULL,
            created_at VARCHAR(20) NOT NULL,
            updated_at VARCHAR(20) NULL,
            deleted_at VARCHAR(20) NULL,
            administrator_id UUID NULL,
            CONSTRAINT pk_discounts PRIMARY KEY (id),
            CONSTRAINT fk_discounts_course_id FOREIGN KEY (course_id) REFERENCES courses (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE discounts;`);
  }
}
