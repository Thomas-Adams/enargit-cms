import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { Profile } from './schema/profile.schema';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get(':id')
  async getProfile(@Param('id') id: string): Promise<Profile> {
    return this.profilesService.getProfileById(id);
  }

  @Get()
  async getProfiles(): Promise<Profile[]> {
    return this.profilesService.getProfiles();
  }

  @Post()
  async createProfile(
    @Body() createProfileDto: CreateProfileDto,
  ): Promise<Profile> {
    return this.profilesService.createProfile(createProfileDto);
  }

  @Patch(':id')
  async updateRole(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    return this.profilesService.updateProfile(id, updateProfileDto);
  }
}
