import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUsers1736977695473 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE users (
            id UUID DEFAULT uuid_generate_v4() NOT NULL,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100) NOT NULL,
            email VARCHAR(40) UNIQUE NOT NULL,
            age INT NOT NULL,
            password VARCHAR(255) NOT NULL,
            balance REAL DEFAULT 0 NOT NULL,
            role_id UUID NOT NULL,
            favorites_id UUID NULL,
            learning_history_id UUID NULL,
            wishlist_id UUID NULL,
            created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
            updated_at TIMESTAMPTZ DEFAULT NULL,
            deleted_at TIMESTAMPTZ DEFAULT NULL,
            CONSTRAINT pk_users PRIMARY KEY (id),
            CONSTRAINT fk_users_role_id FOREIGN KEY (role_id) REFERENCES roles(id),
            CONSTRAINT fk_users_favorites_id FOREIGN KEY (favorites_id) REFERENCES favorites(id),
            CONSTRAINT fk_users_learning_history_id FOREIGN KEY (learning_history_id) REFERENCES learningHistories(id),
            CONSTRAINT fk_users_wishlist_id FOREIGN KEY (wishlist_id) REFERENCES wishlists(id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE users;`);
  }
}
