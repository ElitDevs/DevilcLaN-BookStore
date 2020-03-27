import { IsString, IsDate } from 'class-validator';

export class AuthorDto {
  @IsString()
  firstname;
  @IsString()
  lastname;
  @IsDate()
  birthdate;
  @IsString()
  authorbio;
  @IsString()
  authorpicture;
}
