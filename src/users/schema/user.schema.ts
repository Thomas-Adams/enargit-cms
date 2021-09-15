import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Role } from '../../roles/schema/role.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  enabled: boolean;

  @Prop()
  locked: boolean;

  @Prop()
  expired: boolean;

  @Prop()
  created: Date;

  @Prop()
  modified: Date;

  @Prop({ type: [Types.ObjectId], ref: Role.name })
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
