import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'tournament' })
export class Tournament {
  @PrimaryGeneratedColumn({ name: 'id_tournament' })
  id_tournament: number;

  @Column({ name: 'tournament', nullable: false })
  tournament: string;

  @Column({
    name: 'registration_date',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  registrationDate: Date;

  @Column({ name: 'id_user', nullable: false })
  idUser: number;
}
