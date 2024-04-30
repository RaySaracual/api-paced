import { Module } from '@nestjs/common';
import { StatisticsHistoryService } from './statistics-history.service';
import { StatisticsHistoryController } from './statistics-history.controller';
import { StatisticsHistory } from './entities/statistics-history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StatisticsHistory])],
  controllers: [StatisticsHistoryController],
  providers: [StatisticsHistoryService],
})
export class StatisticsHistoryModule {}
