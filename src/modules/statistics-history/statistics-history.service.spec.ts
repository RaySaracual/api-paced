import { Test, TestingModule } from '@nestjs/testing';
import { StatisticsHistoryService } from './statistics-history.service';

describe('StatisticsHistoryService', () => {
  let service: StatisticsHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatisticsHistoryService],
    }).compile();

    service = module.get<StatisticsHistoryService>(StatisticsHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
