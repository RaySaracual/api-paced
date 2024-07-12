import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'teams' })
export class Teams {
  @PrimaryGeneratedColumn({ name: 'id_team' })
  id_team: number;

  @Column({ name: 'nombre', nullable: false })
  name: string;

  @Column({ name: 'imagen', nullable: true })
  imagen: string;

  @Column({
    name: 'fecha',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha: Date;

  @Column({ name: 'id_user', nullable: false })
  idUser: number;
}
