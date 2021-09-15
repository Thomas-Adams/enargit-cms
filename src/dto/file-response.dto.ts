import { FileInfoDto } from './file-info.dto';

export interface FileResponseDto {
  message: string;
  file: FileInfoDto;
}
