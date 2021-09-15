import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { GridFsMulterConfigService } from './multer-config.service';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { Db, MongoClient } from 'mongodb';

@Module({
  imports: [
    MulterModule.registerAsync({
      useClass: GridFsMulterConfigService,
    }),
  ],
  controllers: [FilesController],
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (): Promise<Db> => {
        try {
          const client = await MongoClient.connect(
            'mongodb://localhost:27017/',
          );
          return client.db('enargit_cms');
        } catch (e) {
          throw e;
        }
      },
    },
    {
      provide: 'ClientConnection',
      useFactory: async (): Promise<MongoClient> => {
        try {
          const client = await MongoClient.connect('mongodb://localhost:27017');
          return client;
        } catch (e) {
          throw e;
        }
      },
    },
    GridFsMulterConfigService,
    FilesService,
  ],
  exports: [FilesService],
})
export class FilesModule {}
