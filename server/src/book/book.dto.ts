import { IsString, IsNumber } from 'class-validator';
/**
 * @class BookDto
 *
 */

export class BookDto {
  @IsString()
  bookname: string;
  @IsNumber()
  bookpages: number;
  @IsString()
  bookisbn: string;
  @IsNumber()
  bookprice: number;
  @IsString()
  bookpicture: string;
  @IsNumber()
  bookqauntity: number;
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
