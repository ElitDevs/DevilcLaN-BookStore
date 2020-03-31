import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    console.log('### => ', username, password);
    const user = await this.userService.read(username);
    if (user && (await user.comparePassword(password))) {
      const { id, username } = user;
      return { id, username };
      //   const { password, ...result } = user;
      //   return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      accesstoken: this.jwtService.sign(payload),
    };
  }
}
