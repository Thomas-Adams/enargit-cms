import { ObjectId } from 'mongoose';
import { UpdateUserDto } from '../../users/dto/update-user.dto';

export interface UpdateProfileDto {
  givenName: string;
  surName: string;
  gender: string;
  birthday: Date;
  enabled: boolean;
  avatar: ObjectId;
  user: ObjectId;
}
