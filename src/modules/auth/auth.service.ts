import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as crypto from 'crypto';
import { LoginSuccessDto } from './dto/login-success.dto';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../users/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly authRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginSuccessDto> {
    const { email, password } = loginDto;
    const user = await this.authRepository.findOne({ where: { email } });
    if (!user || !this.validatePassword(password, user)) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    return {
      idUser: user.idUser,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      token: await this.generateToken(user),
    };
  }

  private validatePassword(password: string, user: User): boolean {
    const hash = crypto.createHash('sha256');
    hash.update(password + user.passwordSalt.toString('hex'), 'utf-8');
    const hashedPassword = Buffer.from(hash.digest('hex'), 'hex');
    return user.password.equals(hashedPassword);
  }

  async generateToken(user: UserDto): Promise<string> {
    const payload = { username: user.email, sub: user.idUser };
    return this.jwtService.sign(payload);
  }
}
