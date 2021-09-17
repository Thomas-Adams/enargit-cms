import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PasswordsService } from '../users/passwords.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private passwordsService: PasswordsService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.getUserByUsername(username);
    if (user && user.password) {
      const ok = await this.passwordsService.comparePassword(
        pass,
        user.password,
      );
      if (ok) {
        const { password, ...result } = user;
        return result;
      } else {
        return null;
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
