import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'statistic' })
export class Statistic {
  @PrimaryGeneratedColumn({ name: 'id_statistic' })
  id_statistic: number;

  @Column({ name: 'id_tipo_estadistica', nullable: false })
  id_tipo_estadistica: number;

  @Column({ name: 'descripcion', nullable: false })
  descripcion: string;

  @Column({ name: 'id_user', nullable: false })
  idUser: number;

  @Column({
    name: 'fecha',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha: Date;
}
