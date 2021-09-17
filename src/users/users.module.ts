import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { UsersController } from './users.controller';
import { PasswordsService } from './passwords.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        imports: [UsersModule],
        useFactory: (passwordsService: PasswordsService) => {
          const schema = UserSchema;
          schema.pre('save', async function (next: any) {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const user = this;
            if (user.isModified('password') || user.isNew) {
              const hash = await passwordsService.encryptPassword(
                user.get('password'),
              );
              user.set('password', hash);
            }
            return next;
          });
          return schema;
        },
        inject: [PasswordsService],
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, PasswordsService],
  exports: [UsersService, UsersRepository, PasswordsService],
})
export class UsersModule {}
