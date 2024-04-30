import { PartialType } from '@nestjs/mapped-types';
import { CreateStatisticsHistoryDto } from './create-statistics-history.dto';

export class UpdateStatisticsHistoryDto extends PartialType(
  CreateStatisticsHistoryDto,
) {}
