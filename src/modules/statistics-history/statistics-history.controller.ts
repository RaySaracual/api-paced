// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
import { Controller, Get, Param } from '@nestjs/common';
import { StatisticsHistoryService } from './statistics-history.service';
import { ApiTags } from '@nestjs/swagger';
// import { CreateStatisticsHistoryDto } from './dto/create-statistics-history.dto';
// import { UpdateStatisticsHistoryDto } from './dto/update-statistics-history.dto';

@Controller('statistics-history')
@ApiTags('statistics-history')
export class StatisticsHistoryController {
  constructor(
    private readonly statisticsHistoryService: StatisticsHistoryService,
  ) {}

  // @Post()
  // create(@Body() createStatisticsHistoryDto: CreateStatisticsHistoryDto) {
  //   return this.statisticsHistoryService.create(createStatisticsHistoryDto);
  // }
  // @Get()
  // findAll() {
  //   return this.statisticsHistoryService.findAll();
  // }

  @Get(':idMacth')
  findOne(@Param('idMacth') idMacth: string) {
    return this.statisticsHistoryService.findOne(+idMacth);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateStatisticsHistoryDto: UpdateStatisticsHistoryDto,
  // ) {
  //   return this.statisticsHistoryService.update(
  //     +id,
  //     updateStatisticsHistoryDto,
  //   );
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.statisticsHistoryService.remove(+id);
  // }
}
