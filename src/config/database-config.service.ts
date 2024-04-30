import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mssql',
      host: 'pollaguru.database.windows.net',
      port: 1433,
      database: 'pa_paced',
      username: this.configService.get<string>('usernameDB'), // Deja el nombre de usuario y contraseña en blanco para autenticación de Windows (Integrated Security)
      password: this.configService.get<string>('passwordDB'),
      synchronize: true, // Esto crea las tablas automáticamente, ten cuidado en producción
      logging: false, // Puedes desactivar esto en producción
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      options: { trustServerCertificate: false },
    };
  }
}
