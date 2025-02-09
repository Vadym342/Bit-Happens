import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableSoftwares1737037662690 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE softwares (
            id UUID DEFAULT uuid_generate_v4() NOT NULL,
            name VARCHAR(50) UNIQUE NOT NULL,
            description VARCHAR(1000) NOT NULL,
            system_requirements VARCHAR(250) NOT NULL,
            version VARCHAR(200) NOT NULL,
            download_link VARCHAR(500) NOT NULL, 
            logo_image VARCHAR(200) NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
            updated_at TIMESTAMPTZ DEFAULT NULL,
            deleted_at TIMESTAMPTZ DEFAULT NULL,
            CONSTRAINT pk_softwares PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE softwares;`);
  }
}
