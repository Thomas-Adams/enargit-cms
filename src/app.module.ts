import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { FilesModule } from './files/files.module';
import { Profile } from './profiles/schema/profile.schema';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/enargit_cms', {}),
    UsersModule,
    RolesModule,
    FilesModule,
    ProfilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
