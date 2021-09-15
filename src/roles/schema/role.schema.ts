import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  enabled: boolean;

  @Prop()
  created: Date;

  @Prop()
  modified: Date;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
