import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableWishlistscourses1737465649574 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE wishlistsCourses (
            id UUID DEFAULT uuid_generate_v4() NOT NULL,
            wishlist_id UUID NOT NULL,
            course_id UUID NOT NULL,
            status VARCHAR(25) NOT NULL,
            priority INT NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
            updated_at TIMESTAMPTZ DEFAULT NULL,
            deleted_at TIMESTAMPTZ DEFAULT NULL,
            CONSTRAINT pk_wishlists_courses PRIMARY KEY (id),
            CONSTRAINT fk_wishlists_courses_wishlist_id FOREIGN KEY (wishlist_id) REFERENCES wishlists(id),
            CONSTRAINT fk_wishlists_courses_course_id FOREIGN KEY (course_id) REFERENCES courses(id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE wishlistsCourses;`);
  }
}
