import { Statistic } from 'src/modules/statistics/entities/statistic.entity';
import { Teams } from 'src/modules/teams/entities/team.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'statistic_history' })
export class StatisticsHistory {
  @PrimaryGeneratedColumn({ name: 'id_statistic_history' })
  id_statistic_history: number;

  @Column({ name: 'id_match', nullable: false })
  id_match: number;

  @ManyToOne(() => Statistic)
  @JoinColumn({ name: 'id_statistic' })
  statistic: Statistic;

  @Column({ name: 'id_user', nullable: false })
  idUser: number;

  @Column({ name: 'cantidad_local', nullable: false, default: 0 })
  cantidadVisitante: number;

  @Column({ name: 'cantidad_visitante', nullable: false, default: 0 })
  cantidadLocal: number;

  @ManyToOne(() => Teams)
  @JoinColumn({ name: 'id_equipo_local' })
  local: Teams;

  @ManyToOne(() => Teams)
  @JoinColumn({ name: 'id_equipo_visitante' })
  visitante: Teams;

  @Column({
    name: 'fecha',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha: Date;
}
