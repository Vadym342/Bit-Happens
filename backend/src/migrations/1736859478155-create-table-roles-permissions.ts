import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableRolesPermissions1736859478155 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE rolesPermissions (
            id UUID DEFAULT uuid_generate_v4() NOT NULL,
            role_id UUID NOT NULL,
            permission_id UUID NOT NULL,
            created_at VARCHAR(25) NOT NULL,
            updated_at VARCHAR(25) NULL,
            deleted_at VARCHAR(25) NULL,
            administrator_id UUID NULL,
            CONSTRAINT pk_roles_permissions PRIMARY KEY (id),
            CONSTRAINT fk_roles_permissions_role_id FOREIGN KEY (role_id) REFERENCES roles(id),
            CONSTRAINT fk_roles_permissions_permission_id FOREIGN KEY (permission_id) REFERENCES permissions(id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE rolesPermissions;`);
  }
}
