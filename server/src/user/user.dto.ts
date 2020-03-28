import { IsString } from 'class-validator';

export class UserDto {
  @IsString()
  username;
  @IsString()
  password;
  @IsString()
  firstname;
  @IsString()
  lastname;
  age;
  @IsString()
  email;
  @IsString()
  profilepicture;
  address;
  @IsString()
  phone;
}
