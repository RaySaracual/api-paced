// user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'users' })
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'name', length: 50 })
  name: string;

  @Column({ name: 'last_name', length: 10 })
  lastName: string;

  // @Column({ name: 'username', length: 50, primary: false })
  // username: string;

  @Column({
    name: 'password_salt',
    type: 'varbinary',
    length: 50,
    nullable: false,
  })
  passwordSalt: Buffer;

  @Column({ name: 'password', type: 'varbinary', length: 50, nullable: false })
  password: Buffer;

  @Column({ name: 'email', length: 50, nullable: true })
  email: string;

  @Column({ name: 'phone', length: 50, nullable: true })
  phone: string;

  @Column({ name: 'id_role' })
  idRole: number;

  @Column({ name: 'id_team' })
  idTeam: number;

  @Column({
    name: 'create_date',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createDate: Date;

  @Column({ name: 'create_by', length: 50 })
  createBy: string;

  @Column({ name: 'update_by', length: 50, default: 'N/A' })
  updateBy: string;
}
