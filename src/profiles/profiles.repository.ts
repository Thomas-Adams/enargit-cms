import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from './schema/role.schema';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class RolesRepository {
  constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

  async findOne(roleFilterQuery: FilterQuery<RoleDocument>): Promise<Role> {
    return this.roleModel.findOne(roleFilterQuery);
  }

  async find(roleFilterQuery: FilterQuery<RoleDocument>): Promise<Role[]> {
    return this.roleModel.find(roleFilterQuery);
  }

  async create(role: Role): Promise<Role> {
    const newRole = new this.roleModel(role);
    return newRole.save();
  }

  async findOneAndUpdate(
    roleFilterQuery: FilterQuery<RoleDocument>,
    role: Partial<Role>,
  ): Promise<Role> {
    return this.roleModel.findOneAndUpdate(roleFilterQuery, role);
  }
}
