import { Db, MongoClient } from 'mongodb';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<Db> => {
      try {
        const client = await MongoClient.connect('mongodb://localhost:27017/');
        return client.db('enargit_cms');
      } catch (e) {
        throw e;
      }
    },
  },
  {
    provide: 'Client',
    useFactory: async (): Promise<MongoClient> => {
      try {
        const client = await MongoClient.connect('mongodb://localhost:27017');
        return client;
      } catch (e) {
        throw e;
      }
    },
  },
];
