import {
  Controller,
  Logger,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './book.dto';

@Controller('/api/books')
export class BookController {
  private logger = new Logger('==== Book Contoller ====');
  // injecting the service
  constructor(private bookService: BookService) {}

  /**
   * get route to return every book in the library
   */
  @Get()
  getAll() {
    return this.bookService.findAll();
  }

  /**
   * @function
   * return a book by its id
   * @param id
   */
  @Get(':id')
  getOne(@Param('id') id: string) {
    this.logger.log(JSON.stringify(id));
    return this.bookService.read(id);
  }

  /**
   * @function
   * add book to our library
   * @param data
   */
  @Post()
  post(@Body() data: BookDto) {
    this.logger.log(JSON.stringify(data));
    return this.bookService.create(data);
  }

  /**
   * @function
   * updating a book by it's id
   * @param id
   * @param data
   */
  @Put(':id')
  put(@Param('id') id: string, @Body() data: Partial<BookDto>) {
    this.logger.log(JSON.stringify(data));
    return this.bookService.update(id, data)
  }

  /**
   * @function
   * remove a sad book from our library
   * @param id
   */
  @Delete(':id')
  destroy(@Param('id') id: string) {
    this.logger.log(JSON.stringify(id));
    return  this.bookService.remove(id)
  }
}
