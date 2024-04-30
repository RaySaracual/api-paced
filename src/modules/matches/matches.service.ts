import { Injectable } from '@nestjs/common';
// import { CreateMatchDto } from './dto/create-match.dto';
// import { UpdateMatchDto } from './dto/update-match.dto';
import { Repository } from 'typeorm';
import { Match } from './entities/match.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseMatchDto } from './dto/response-match.dto';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Match)
    private readonly matchRepository: Repository<Match>,
  ) {}

  // create(createMatchDto: CreateMatchDto) {
  //   return 'This action adds a new match';
  // }

  // findAll() {
  //   return this.matchRepository.find(); // Devuelve todos los registros de la tabla matches
  // }

  // metodo que uniendo las tablas de matches, teams alimenten el responseMatchDto
  async getAllMatches(): Promise<ResponseMatchDto[]> {
    const matches = await this.matchRepository.find({
      relations: ['local', 'visitante', 'tournament'],
    });
    return matches.map((match) => ({
      id_match: match.id_match,
      visitante: match.visitante.name,
      id_visitante: match.visitante.id_team,
      img_visitante: match.visitante.imagen,
      local: match.local.name,
      id_local: match.local.id_team,
      img_local: match.local.imagen,
      fecha: match.fecha,
      hora: match.hora,
      lugar: match.lugar,
      torneo: match.tournament.tournament,
      state: match.idState === 1 ? 'Proximamente' : 'Finalizado',
    }));
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} match`;
  // }

  // update(id: number, updateMatchDto: UpdateMatchDto) {
  //   return `This action updates a #${id} match`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} match`;
  // }
}
