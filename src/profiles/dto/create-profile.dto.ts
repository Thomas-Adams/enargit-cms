import { ObjectId } from 'mongoose';
import { CreateUserDto } from '../../users/dto/create-user.dto';

export interface CreateProfileDto {
  givenName: string;
  surName: string;
  gender: string;
  birthday: Date;
  enabled: boolean;
  avatar: ObjectId;
  user: ObjectId;
}
