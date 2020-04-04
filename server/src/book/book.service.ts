import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BookEntity } from './book.entity';
import { BookDto } from './book.dto';
import { AuthorEntity } from './../author/author.entity';
import e = require('express');

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
    const authors: AuthorEntity[] = await this.authorRepository.findByIds(
      data.authors,
    );

    console.log('found author : ', authors);
    const book = new BookEntity();
    book.bookname = data.bookname;
    book.bookname = data.bookname;
    book.bookpages = data.bookpages;
    book.bookisbn = data.bookisbn;
    book.bookprice = data.bookprice;
    book.bookpicture = data.bookpicture;
    book.bookqauntity = data.bookqauntity;
    book.categories = data.category;
    book.authors = authors;
    await this.bookRepository.save(book);
    return book;
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
