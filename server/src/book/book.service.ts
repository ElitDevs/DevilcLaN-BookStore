import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BookEntity } from './book.entity';
import { BookDto } from './book.dto';

@Injectable()
export class BookService {

    constructor(
        @InjectRepository(BookEntity)
        private bookRepository : Repository<BookEntity>
    ){}

    async findAll(): Promise<BookEntity[]> {
        return await this.bookRepository.find();
    }

    async read(id: string):Promise<BookEntity>{
        const book = await this.bookRepository.findOne({id});
        if(!book){
            throw new HttpException('Not Found', HttpStatus.BAD_REQUEST);
        }
        return await this.bookRepository.findOne({id})
    }

    async create(data : BookDto):Promise<BookEntity>{
        const book = await this.bookRepository.create({...data});
        await this.bookRepository.save(book);
        return book;
    }

    async update(id: string, data: Partial<BookDto>):Promise<BookEntity>{
        const book = await this.bookRepository.findOne({id});
        if(!book){
            throw new HttpException('Not Found', HttpStatus.BAD_REQUEST);
        }
        await this.bookRepository.update({id}, data);
        return book; 
    }

    async remove(id:string){
        const book = await this.bookRepository.findOne({id});
        if(!book){
            throw new HttpException('Not Found', HttpStatus.BAD_REQUEST);
        }
        await this.bookRepository.remove(book);
        return true;
    }

}
