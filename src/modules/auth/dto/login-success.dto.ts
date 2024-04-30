import { PartialType } from '@nestjs/mapped-types';
import { LoginDto } from './login.dto';
import { ApiProperty } from '@nestjs/swagger';
export class LoginSuccessDto extends PartialType(LoginDto) {
  @ApiProperty()
  idUser: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  token: string;
}
