/* eslint-disable no-console */
import { DataSource } from 'typeorm';

import 'dotenv/config';
import { getDataSourceConfig } from '@src/database/ormconfig';

const { DB_SCHEMA_NAME, DB_USERNAME } = process.env;

async function createDatabaseSchema() {
  const dataSource = await new DataSource(getDataSourceConfig()).initialize();

  try {
    await dataSource.query(`CREATE SCHEMA IF NOT EXISTS ${DB_SCHEMA_NAME} AUTHORIZATION ${DB_USERNAME};`);
  } catch (error) {
    console.error(error);
  } finally {
    await dataSource.destroy();
  }
}

createDatabaseSchema()
  .then(() => {
    console.log('Schema was created');
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
