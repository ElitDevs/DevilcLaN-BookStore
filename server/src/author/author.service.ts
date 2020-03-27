import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from './author.entity';
import { Repository } from 'typeorm';
import { AuthorDto } from './author.dto';

@Injectable()
export class AuthorService {
  private logger = new Logger('AuthorService');

  constructor(
    @InjectRepository(AuthorEntity)
    private authorRepository: Repository<AuthorEntity>,
  ) {}

  async findAll(): Promise<AuthorEntity[]> {
    return await this.authorRepository.find();
  }

  async read(id: string): Promise<AuthorEntity> {
    return await this.authorRepository.findOne({ id });
  }

  async create(data: AuthorDto): Promise<AuthorEntity> {
    const author = await this.authorRepository.create({ ...data });
    return await this.authorRepository.save(author);
  }

  async update(id: string, data: Partial<AuthorDto>): Promise<AuthorEntity> {
    const author = await this.authorRepository.findOne({ id });
    if (!author) {
      throw new HttpException('Not Found', HttpStatus.BAD_REQUEST);
    }
    await this.authorRepository.update({ id }, data);
    return author;
  }

  async delete(id: string) {
    const author = await this.authorRepository.findOne({ id });
    if (!author) {
      throw new HttpException('Not Found', HttpStatus.BAD_REQUEST);
    } 
    await this.authorRepository.remove(author);
    return true;
  }
}
