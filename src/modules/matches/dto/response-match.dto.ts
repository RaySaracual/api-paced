import { ApiProperty } from '@nestjs/swagger';

export class ResponseMatchDto {
  @ApiProperty()
  id_match: number;

  @ApiProperty()
  visitante: string;

  @ApiProperty()
  id_visitante: number;

  @ApiProperty()
  img_visitante: string;

  @ApiProperty()
  local: string;

  @ApiProperty()
  id_local: number;

  @ApiProperty()
  img_local: string;

  @ApiProperty()
  fecha: Date;

  @ApiProperty()
  hora: string;

  @ApiProperty()
  lugar: string;

  @ApiProperty()
  torneo: string;

  @ApiProperty()
  state: string;
}
