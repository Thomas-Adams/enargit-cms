export interface FileInfoDto {
  id: string;
  length: number;
  chunkSize: number;
  filename: string;
  md5: string;
  contentType: string;
}
