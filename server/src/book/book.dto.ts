import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { AuthorEntity } from 'src/author/author.entity';
import { CategoryEntity } from './../category/category.entity';
/**
 * @class BookDto
 *
 */

export class BookDto {
  @IsString()
  @IsNotEmpty()
  bookname: string;
  @IsNumber()
  bookpages: number;
  @IsString()
  @IsNotEmpty()
  bookisbn: string;
  @IsNumber()
  bookprice: number;
  @IsString()
  bookpicture: string;
  @IsNumber()
  bookqauntity: number;

  authors: AuthorEntity[];

  category: CategoryEntity[];
}

// export class BookRo {
//   id?: string;
//   bookname: string;
//   bookpages: string;
//   bookisbn: string;
//   bookprice: number;
//   bookpicture: string;
//   bookqauntity: string;

// }
