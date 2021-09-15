export interface CreateProfileDto {
  givenName: string;
  surName: string;
  gender: string;
  birthday: Date;
  enabled: boolean;
  avatar: string;
}
