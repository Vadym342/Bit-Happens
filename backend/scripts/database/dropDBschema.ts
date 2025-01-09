/* eslint-disable no-console */
import { DataSource } from 'typeorm';

import 'dotenv/config';
import { getDataSourceConfig } from '@src/database/ormconfig';

const { DB_SCHEMA_NAME } = process.env;

async function dropDatabaseSchema() {
  const dataSource = await new DataSource(getDataSourceConfig()).initialize();

  try {
    await dataSource.query(`DROP SCHEMA IF EXISTS ${DB_SCHEMA_NAME} CASCADE;`);
  } catch (error) {
    console.error(error);
  } finally {
    await dataSource.destroy();
  }
}

dropDatabaseSchema()
  .then(() => {
    console.log('Schema was dropped');
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
