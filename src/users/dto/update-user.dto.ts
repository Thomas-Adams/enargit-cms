import { Role } from '../../roles/schema/role.schema';
export interface UpdateUserDto {
  username: string;
  email: string;
  enabled: boolean;
  loading: boolean;
  expired: boolean;
  roles: Array<Role>;
}
