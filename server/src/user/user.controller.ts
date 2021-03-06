import {
  Controller,
  Logger,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

import { LocalAuthGuard } from './../auth/local-auth.guard';
import { AuthService } from './../auth/auth.service';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';

@Controller('api/users')
export class UserController {
  private logger = new Logger('User Controller');
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getOne(@Param('username') username: string) {
    return this.userService.read(username);
  }

  /**
   * sign up route
   * @param data
   */
  @Post('signup')
  signup(@Body() data: Partial<UserDto>) {
    console.log('je suis la ');
    return this.userService.create(data);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    // console.log(req);
    return this.authService.login(req.user);
  }

  // this method to test jwt is working
  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // get(@Request() req) {
  //   return req.user;
  // }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  put(@Param('id') id: number, data: Partial<UserDto>) {
    return this.userService.update(id, data);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  destroy(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
