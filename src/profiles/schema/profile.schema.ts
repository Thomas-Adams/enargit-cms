import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

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

  @Prop()
  avatar: {
    type: mongoose.Schema.Types.ObjectId;
    ref: 'GridFs';
  };

  @Prop()
  created: Date;

  @Prop()
  modified: Date;
}
