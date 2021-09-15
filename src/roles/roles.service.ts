import { Injectable } from '@nestjs/common';
import { RolesRepository } from './roles.repository';
import { Role } from './schema/role.schema';
import { UpdateRoleDto } from './dto/update-role.dto';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(private readonly rolesRepository: RolesRepository) {}

  async getRoleById(rolename: string): Promise<Role> {
    return this.rolesRepository.findOne({ name: rolename });
  }

  async getRoles(): Promise<Role[]> {
    return this.rolesRepository.find({});
  }

  async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
    return this.rolesRepository.create({
      ...createRoleDto,
      modified: new Date(),
      created: new Date(),
      enabled: true,
    });
  }

  async updateRole(
    roleName: string,
    roleUpdates: UpdateRoleDto,
  ): Promise<Role> {
    return this.rolesRepository.findOneAndUpdate(
      { name: roleName },
      roleUpdates,
    );
  }
}
