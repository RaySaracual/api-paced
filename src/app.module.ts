import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { MatchesModule } from './modules/matches/matches.module';
import { TeamsModule } from './modules/teams/teams.module';
import { StatisticsModule } from './modules/statistics/statistics.module';
import { StatisticsHistoryModule } from './modules/statistics-history/statistics-history.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UsersModule,
    AuthModule,
    MatchesModule,
    TeamsModule,
    StatisticsModule,
    StatisticsHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
