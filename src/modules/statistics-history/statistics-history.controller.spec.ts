import { Test, TestingModule } from '@nestjs/testing';
import { StatisticsHistoryController } from './statistics-history.controller';
import { StatisticsHistoryService } from './statistics-history.service';

describe('StatisticsHistoryController', () => {
  let controller: StatisticsHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatisticsHistoryController],
      providers: [StatisticsHistoryService],
    }).compile();

    controller = module.get<StatisticsHistoryController>(
      StatisticsHistoryController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
