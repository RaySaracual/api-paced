import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  idUser: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  idRole: number;
}
