import { Injectable } from '@nestjs/common';
import { ProfilesRepository } from './profiles.repository';
import { Profile } from './schema/profile.schema';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UsersRepository } from '../users/users.repository';
import { FilesService } from '../files/files.service';

@Injectable()
export class ProfilesService {
  constructor(
    private readonly profilesRepository: ProfilesRepository,
    private readonly userRepository: UsersRepository,
    private readonly fileService: FilesService,
  ) {}

  async getProfileById(id: string): Promise<Profile> {
    return this.profilesRepository.findOne({ _id: id });
  }

  async getProfiles(): Promise<Profile[]> {
    return this.profilesRepository.find({});
  }

  async createProfile(createProfileDto: CreateProfileDto): Promise<Profile> {
    const user = await this.userRepository.findOne({
      _id: createProfileDto.user,
    });
    return this.profilesRepository.create({
      avatar: createProfileDto.avatar,
      birthday: createProfileDto.birthday,
      givenName: createProfileDto.givenName,
      surName: createProfileDto.surName,
      gender: createProfileDto.gender,
      user: user,
      enabled: createProfileDto.enabled,
      modified: new Date(),
      created: new Date(),
    });
  }

  async updateProfile(
    id: string,
    profileUpdates: UpdateProfileDto,
  ): Promise<Profile> {
    return this.profilesRepository.findOneAndUpdate(
      { _id: id },
      {
        gender: profileUpdates.gender,
        enabled: profileUpdates.enabled,
        surName: profileUpdates.surName,
        givenName: profileUpdates.givenName,
        birthday: profileUpdates.birthday,
        avatar: profileUpdates.avatar,
        modified: new Date(),
      },
    );
  }
}
