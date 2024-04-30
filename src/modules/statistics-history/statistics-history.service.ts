import { Injectable } from '@nestjs/common';
import { StatisticsHistory } from './entities/statistics-history.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseStatisticsDto } from './dto/response-statistics.dto';
// import { CreateStatisticsHistoryDto } from './dto/create-statistics-history.dto';
// import { UpdateStatisticsHistoryDto } from './dto/update-statistics-history.dto';

@Injectable()
export class StatisticsHistoryService {
  /**
   *
   */
  constructor(
    @InjectRepository(StatisticsHistory)
    private readonly statisticsHistoryRepository: Repository<StatisticsHistory>,
  ) {}

  // create(createStatisticsHistoryDto: CreateStatisticsHistoryDto) {
  //   return 'This action adds a new statisticsHistory';
  // }

  async findOne(idMacth: number): Promise<ResponseStatisticsDto[]> {
    const response = new Array<ResponseStatisticsDto>();
    const statistic = await this.statisticsHistoryRepository.find({
      relations: ['local', 'visitante', 'statistic'],
      where: { id_match: idMacth },
    });

    statistic.map((stat) => {
      response.push({
        cantidadLocal: stat.cantidadLocal,
        cantidadVisitante: stat.cantidadVisitante,
        fecha: stat.fecha,
        idLocal: stat.local.id_team,
        idMatch: stat.id_match,
        idVisitante: stat.visitante.id_team,
        local: stat.local.name,
        statistic: stat.statistic.descripcion,
        visitante: stat.visitante.name,
      });
    });

    return response;
  }

  remove(id: number) {
    return `This action removes a #${id} statisticsHistory`;
  }
}
