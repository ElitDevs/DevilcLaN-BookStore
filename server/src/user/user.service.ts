import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  private logger = new Logger('User Service');

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async read(username: string): Promise<UserEntity | undefined> {
    return await this.userRepository.findOne({ username });
  }

  async create(data: Partial<UserDto>): Promise<UserEntity> {
    const user = await this.userRepository.create({ ...data });
    return await this.userRepository.save(user);
  }

  async update(id: number, data: Partial<UserDto>): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ id });
    if (!user) {
      throw new HttpException('Not Found', HttpStatus.BAD_REQUEST);
    }
    await this.userRepository.update({ id }, data);
    return user;
  }

  async delete(id: number) {
    const user = await this.userRepository.findOne({ id });
    if (!user) {
      throw new HttpException('Not Found', HttpStatus.BAD_REQUEST);
    }
    await this.userRepository.remove(user);
    return true;
  }
}
