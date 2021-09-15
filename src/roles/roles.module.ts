import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema } from './schema/role.schema';
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesRepository } from './roles.repository';
import { RolesController } from './roles.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
  ],
  controllers: [RolesController],
  providers: [RolesService, RolesRepository],
})
export class RolesModule {}
