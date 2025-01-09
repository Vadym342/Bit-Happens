import { seedingDataSource } from './seedsDataSource';

async function revertAllSeeds(): Promise<void> {
  const dataSource = await seedingDataSource.initialize();

  try {
    for (let i = 0; i < dataSource.migrations.length; i++) {
      await dataSource.undoLastMigration();
    }
  } catch (error) {
    console.error('Error due seed revert', error);
    throw error;
  } finally {
    await dataSource.destroy();
  }
}

revertAllSeeds()
  .then(() => {
    console.log('All seeds were successfully reverted');
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
