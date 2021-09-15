import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Profile, ProfileDocument } from './schema/profile.schema';

@Injectable()
export class ProfilesRepository {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<ProfileDocument>,
  ) {}

  async findOne(
    profileFilterQuery: FilterQuery<ProfileDocument>,
  ): Promise<Profile> {
    return this.profileModel.findOne(profileFilterQuery);
  }

  async find(
    profileFilterQuery: FilterQuery<ProfileDocument>,
  ): Promise<Profile[]> {
    return this.profileModel.find(profileFilterQuery);
  }

  async create(profile: Profile): Promise<Profile> {
    const newProfile = new this.profileModel(profile);
    return newProfile.save();
  }

  async findOneAndUpdate(
    profileFilterQuery: FilterQuery<ProfileDocument>,
    profile: Partial<Profile>,
  ): Promise<Profile> {
    return this.profileModel.findOneAndUpdate(profileFilterQuery, profile);
  }
}
