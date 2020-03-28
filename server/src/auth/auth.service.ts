import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.read(username);
    if (user && (await user.comparePassword(password))) {
      return user;
    }
    return null;
  }
}
