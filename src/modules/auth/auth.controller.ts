import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginSuccessDto } from './dto/login-success.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiResponse({
    status: 200,
    description: 'Login Correcto',
    type: [LoginSuccessDto],
  })
  async create(@Body() loginDto: LoginDto) {
    try {
      const user = await this.authService.login(loginDto);
      return { message: 'Inicio de sesión exitoso', user };
    } catch (error) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
  }
}
