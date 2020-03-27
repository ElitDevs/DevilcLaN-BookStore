import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Logger,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './category.dto';

@Controller('api/categories')
export class CategoryController {
  private logger = new Logger('====== Category Controller ====');
  constructor(private categoryService: CategoryService) {}

  @Get()
  getAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    this.logger.log(JSON.stringify(id));
    return this.categoryService.findOne(id);
  }

  @Post()
  post(@Body() data: CategoryDto) {
    this.logger.log(JSON.stringify(data));
    return this.categoryService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: CategoryDto) {
    this.logger.log(JSON.stringify(data));
    return this.categoryService.update(id, data);
  }

  @Delete(':id')
  destroy(@Param('id') id: number) {
    this.logger.log(JSON.stringify(id));
    return this.categoryService.remove(id);
  }
}
