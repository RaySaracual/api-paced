import { Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { MatchesController } from './matches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './entities/match.entity';
import { Teams } from '../teams/entities/team.entity';
import { TeamsService } from '../teams/teams.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Match]),
    TypeOrmModule.forFeature([Teams]),
  ],
  controllers: [MatchesController],
  providers: [MatchesService, TeamsService],
})
export class MatchesModule {}
