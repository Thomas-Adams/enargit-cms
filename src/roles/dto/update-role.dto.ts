export interface UpdateUserDto {
  username: string;
  email: string;
  enabled: boolean;
  loading: boolean;
  expired: boolean;
}
