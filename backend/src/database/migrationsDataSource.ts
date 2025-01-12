import { DataSource } from 'typeorm';

import { getDataSourceConfig } from './ormconfig';

export const dataSource: DataSource = new DataSource(getDataSourceConfig());
