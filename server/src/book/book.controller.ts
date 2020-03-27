import { Controller, Logger , Param, Body, Get, Post, Put, Delete} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './book.dto';

@Controller('/api/books')
export class BookController {

    private logger = new Logger('==== Book Contoller ====');
    // injecting the service
    constructor(private bookService : BookService){}

    /**
     * get route to return every book in the library
     */
    @Get()
    getAll() {
       return "This action returns all books";
    }

    /**
     * @function
     * return a book by its id
     * @param id 
     */
    @Get(":id")
    getOne(@Param("id") id: number) {
        this.logger.log(JSON.stringify(id))
       return "This action returns  book by #" + id;
    }

    /**
     * @function
     * add book to our library
     * @param data 
     */
    @Post()
    post(@Body() data : BookDto) {
        this.logger.log(JSON.stringify(data))
       return "Saving a book...";
    }

    /**
     * @function
     * updating a book by it's id
     * @param id 
     * @param data 
     */
    @Put(":id")
    put(@Param("id") id: number, @Body() data: Partial<BookDto>) {
        this.logger.log(JSON.stringify(data))
       return "Updating a book...";
    }

    /**
     * @function 
     * remove a sad book from our library
     * @param id 
     */
    @Delete(":id")
    remove(@Param("id") id: number) {
        this.logger.log(JSON.stringify(id))
       return "Removing book by id...";
    }


}
