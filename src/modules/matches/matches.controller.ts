import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { MatchesService } from './matches.service';
import { ApiTags } from '@nestjs/swagger';
// import { CreateMatchDto } from './dto/create-match.dto';
// import { UpdateMatchDto } from './dto/update-match.dto';

@Controller('matches')
@ApiTags('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  // @Post()
  // create(@Body() createMatchDto: CreateMatchDto) {
  //   return this.matchesService.create(createMatchDto);
  // }

  @Get()
  getAllMatches() {
    return this.matchesService.getAllMatches();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.matchesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto) {
  //   return this.matchesService.update(+id, updateMatchDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.matchesService.remove(+id);
  // }
}
