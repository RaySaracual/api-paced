import { Injectable } from '@nestjs/common';
// import { CreateTeamDto } from './dto/create-team.dto';
// import { UpdateTeamDto } from './dto/update-team.dto';
import { Teams } from './entities/team.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Teams)
    private readonly teamsRepository: Repository<Teams>,
  ) {}
  // create(createTeamDto: CreateTeamDto) {
  //   return 'This action adds a new team';
  // }

  findAll() {
    return this.teamsRepository.find(); // Devuelve todos los registros de la tabla matches
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  // update(id: number, updateTeamDto: UpdateTeamDto) {
  //   return `This action updates a #${id} team`;
  // }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
