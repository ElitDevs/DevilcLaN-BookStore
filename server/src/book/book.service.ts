import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BookEntity } from './book.entity';
import { BookDto } from './book.dto';
import { AuthorEntity } from './../author/author.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private bookRepository: Repository<BookEntity>,
    @InjectRepository(AuthorEntity)
    private authorRepository: Repository<AuthorEntity>,
  ) {}

  async findAll(): Promise<BookEntity[]> {
    return await this.bookRepository.find();
  }

  async read(id: string): Promise<BookEntity> {
    const book = await this.bookRepository.findOne({ id });
    if (!book) {
      throw new HttpException('Not Found', HttpStatus.BAD_REQUEST);
    }
    return await this.bookRepository.findOne({ id });
  }

  async create(data): Promise<BookEntity> {
    //get the data => books + data for authors and category
    // console.log('data for book : ', data);
    // bookname: "The Testaments: The Sequel to 'The Handmaid's Tale'",
    // bookpages: 432,
    // bookisbn: '978-0385543781',
    // bookprice: 15,
    // bookpicture: '',
    // bookqauntity: 50,
    // category: 1,
    // authors: [ '26ecd3b0-7f19-401e-97fd-8fc1ad473c50' ]
    // const book = await this.bookRepository.create({
    //   bookname: data.bookname,
    //   bookname: data.bookname,
    //   bookpages: data.bookpages,
    //   bookisbn: data.bookisbn,
    //   bookprice: data.bookprice,
    //   bookpicture: data.bookpicture,
    //   bookqauntity: data.bookqauntity,
    //   category: data.category,
    //   authors: data.authors,
    // });

    // const author = await this.authorRepository.findOne({ id: data.authors[0] });
    // console.log('found author : ', author);
    const book = new BookEntity();
    book.bookname = data.bookname;
    book.bookname = data.bookname;
    book.bookpages = data.bookpages;
    book.bookisbn = data.bookisbn;
    book.bookprice = data.bookprice;
    book.bookpicture = data.bookpicture;
    book.bookqauntity = data.bookqauntity;
    book.categories = data.category;
    book.authors = data.authors;
    await this.bookRepository.save(book);
    return book;
    // return await this.bookRepository.find();
  }

  async update(id: string, data: Partial<BookDto>): Promise<BookEntity> {
    const book = await this.bookRepository.findOne({ id });
    if (!book) {
      throw new HttpException('Not Found', HttpStatus.BAD_REQUEST);
    }
    await this.bookRepository.update({ id }, data);
    return book;
  }

  async remove(id: string) {
    const book = await this.bookRepository.findOne({ id });
    if (!book) {
      throw new HttpException('Not Found', HttpStatus.BAD_REQUEST);
    }
    await this.bookRepository.remove(book);
    return true;
  }
}
