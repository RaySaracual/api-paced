import { ApiProperty } from '@nestjs/swagger';

export class ResponseStatisticsDto {
  @ApiProperty()
  idMatch: number;

  @ApiProperty()
  statistic: string;

  @ApiProperty()
  cantidadVisitante: number;

  @ApiProperty()
  cantidadLocal: number;

  @ApiProperty()
  visitante: string;

  @ApiProperty()
  idVisitante: number;

  @ApiProperty()
  local: string;

  @ApiProperty()
  idLocal: number;

  @ApiProperty()
  fecha: Date;
}
