import 'dotenv/config';
import * as path from 'path';

import { DataSourceOptions, DataSource } from 'typeorm';

export const seedConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  schema: process.env.DB_SCHEMA,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [path.join(__dirname, '..', 'modules', '**', '*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, '..', 'seeds', '*{.ts,.js}')],
  migrationsTableName: 'seeds',
};

export const seedingDataSource: DataSource = new DataSource(seedConfig);
