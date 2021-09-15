import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from './schema/role.schema';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get(':rolename')
  async getRole(@Param('rolename') rolename: string): Promise<Role> {
    return this.rolesService.getRoleById(rolename);
  }

  @Get()
  async getRoles(): Promise<Role[]> {
    return this.rolesService.getRoles();
  }

  @Post()
  async createRole(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.rolesService.createRole(createRoleDto);
  }

  @Patch(':rolename')
  async updateRole(
    @Param('rolename') rolename: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ): Promise<Role> {
    return this.rolesService.updateRole(rolename, updateRoleDto);
  }
}
