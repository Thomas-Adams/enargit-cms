import { Role } from '../../roles/schema/role.schema';

export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
  roles: Array<Role>;
}
