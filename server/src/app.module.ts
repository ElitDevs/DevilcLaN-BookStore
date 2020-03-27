import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [TypeOrmModule.forRoot(), BookModule, AuthorModule, CategoryModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
