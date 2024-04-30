import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '123456', // Usa la misma clave secreta que en el AuthModule
    });
  }

  async validate(payload: any) {
    // Aquí podrías realizar alguna lógica para validar el usuario si es necesario
    return { userId: payload.sub, username: payload.username };
  }
}
