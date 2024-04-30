import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  idRole: number;

  @ApiProperty()
  idTeam: number;

  @ApiProperty()
  phone: string;

  updateBy: string;

  createBy: string;
}
