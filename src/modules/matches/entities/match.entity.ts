import { Teams } from 'src/modules/teams/entities/team.entity';
import { Tournament } from 'src/modules/tournament/entities/tournament.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'matches' })
export class Match {
  @PrimaryGeneratedColumn({ name: 'id_match' })
  id_match: number;

  @Column({
    name: 'fecha',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha: Date;

  @Column({ name: 'hora', nullable: false, default: '13:00' })
  hora: string;

  @Column({ name: 'lugar', nullable: false })
  lugar: string;

  @ManyToOne(() => Teams)
  @JoinColumn({ name: 'id_equipo_local' })
  local: Teams;

  @ManyToOne(() => Teams)
  @JoinColumn({ name: 'id_equipo_visitante' })
  visitante: Teams;

  @ManyToOne(() => Tournament)
  @JoinColumn({ name: 'id_tournament' })
  tournament: Tournament;

  @Column({ name: 'id_user', nullable: false })
  idUser: number;

  @Column({ name: 'id_state', nullable: false, default: 1 })
  idState: number;
}
