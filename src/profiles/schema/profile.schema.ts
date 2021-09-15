import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, ObjectId } from 'mongoose';
import { User } from '../../users/schema/user.schema';

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {
  @Prop()
  givenName: string;

  @Prop()
  surName: string;

  @Prop()
  gender: string;

  @Prop()
  birthday: Date;

  @Prop()
  enabled: boolean;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GridFs',
    required: false,
  })
  avatar: ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  user: User;

  @Prop()
  created: Date;

  @Prop()
  modified: Date;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
