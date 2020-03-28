import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Logger,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorDto } from './author.dto';

@Controller('api/authors')
export class AuthorController {
  private logger = new Logger('==== Author Controller ====');

  constructor(private authorService: AuthorService) {}

  @Get()
  getAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    this.logger.log(JSON.stringify(id));
    return this.authorService.read(id);
  }

  @Post()
  post(@Body() data: Partial<AuthorDto>) {
    this.logger.log(JSON.stringify(data));
    return this.authorService.create(data);
  }

  @Put(':id')
  put(@Param('id') id: string, @Body() data: Partial<AuthorDto>) {
    this.logger.log(JSON.stringify(data));
    return this.authorService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.logger.log(JSON.stringify(id));
    return this.authorService.delete(id);
  }
}
