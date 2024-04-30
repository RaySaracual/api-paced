import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import * as crypto from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDto[]> {
    let user = new User();
    user.name = createUserDto.name;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;
    user.phone = createUserDto.phone;
    user.idRole = createUserDto.idRole;
    user.idTeam = createUserDto.idTeam;
    user.createBy = 'rsaracual';
    user.updateBy = 'rsaracual';

    this.generateSaltAndHash(user, createUserDto.password);

    user = await this.usersRepository.save(user);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, passwordSalt, ...data } = user;

    return [data];
  }

  async findAll(): Promise<UserDto[]> {
    const users = await this.usersRepository.find();

    return users.map((user) => ({
      idUser: user.idUser,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      idRole: user.idRole,
    }));
  }

  async findOne(idUser: number): Promise<UserDto> {
    const user = await this.usersRepository.findOneBy({ idUser });

    return {
      idUser: user.idUser,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      idRole: user.idRole,
    };
  }

  async remove(idUser: number): Promise<void> {
    await this.usersRepository.delete(idUser);
  }

  async update(idUser: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({
      where: {
        idUser,
      },
      lock: { mode: 'optimistic', version: 1 },
    });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    user.name = updateUserDto.name;
    user.lastName = updateUserDto.lastName;
    user.password = Buffer.from(updateUserDto.password, 'utf-8');
    user.email = updateUserDto.email;
    user.phone = updateUserDto.phone;
    user.updateBy = 'rsaracual';

    return this.usersRepository.save(user);
  }

  private generateSaltAndHash(user: User, password: string) {
    // Generar un valor de sal criptográficamente seguro
    user.passwordSalt = crypto.randomBytes(32);

    // Utilizar un algoritmo de hash específico (SHA-256 en este caso)
    const hash = crypto.createHash('sha256');

    // Combina la contraseña del usuario con la sal
    hash.update(password + user.passwordSalt.toString('hex'), 'utf-8');

    // Obtiene el hash resultante y lo almacena en la entidad
    user.password = Buffer.from(hash.digest('hex'), 'hex');
  }
}
