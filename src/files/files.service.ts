import { MongoGridFS } from 'mongo-gridfs';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Db, GridFSBucketReadStream, MongoClient } from 'mongodb';
import { FileInfoDto } from '../dto/file-info.dto';

@Injectable()
export class FilesService {
  private fileModel: MongoGridFS;

  constructor(
    @InjectConnection('Client')
    private readonly client: MongoClient,
  ) {
    this.fileModel = new MongoGridFS(this.client.db('enargit_cms'), 'fs');
  }

  async readStream(id: string): Promise<GridFSBucketReadStream> {
    return await this.fileModel.readFileStream(id);
  }

  async findInfo(id: string): Promise<FileInfoDto> {
    const result = await this.fileModel
      .findById(id)
      .catch((err) => {
        console.dir(err);
        throw new HttpException('File not found', HttpStatus.NOT_FOUND);
      })
      .then((result) => result);
    return {
      id: result._id.toString(),
      filename: result.filename,
      length: result.length,
      chunkSize: result.chunkSize,
      md5: result.md5,
      contentType: result.contentType,
    };
  }

  async deleteFile(id: string): Promise<boolean> {
    return await this.fileModel.delete(id);
  }
}
