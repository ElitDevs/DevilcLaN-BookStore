import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  async findAll(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.find();
  }

  async findOne(id: number): Promise<CategoryEntity> {
    return await this.categoryRepository.findOne({ id });
  }

  async create(data: CategoryDto): Promise<CategoryEntity> {
    const category = await this.categoryRepository.create({ ...data });
    return await this.categoryRepository.save(category);
  }

  async update(id: number, data: CategoryDto): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOne({ id });
    if (!category) {
      throw new HttpException('Not Found', HttpStatus.BAD_REQUEST);
    }
    await this.categoryRepository.update({ id }, data);
    return category;
  }

  async remove(id: number) {
    const category = await this.categoryRepository.findOne({ id });
    if (!category) {
      throw new HttpException('Not Found', HttpStatus.BAD_REQUEST);
    }
    await this.categoryRepository.remove(category);
    return true;
  }
}
