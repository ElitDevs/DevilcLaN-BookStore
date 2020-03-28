import {
  Controller,
  Logger,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('api/users')
export class UserController {
  private logger = new Logger('User Controller');
  constructor(private userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  getOne(@Param('username') username: string) {
    return this.userService.read(username);
  }

  @Post()
  post(@Body() data: Partial<UserDto>) {
    return this.userService.create(data);
  }

  @Put(':id')
  put(@Param('id') id: number, data: Partial<UserDto>) {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  destroy(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
