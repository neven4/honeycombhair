import { Controller, Get, Query } from '@nestjs/common';
import { HairstylesService } from './hairstyles.service';
import { PaginationOptionsDto } from 'src/common/pagination/PaginationOptions.dto';
import { PaginationDto } from 'src/common/pagination/Pagination.dto';
import { Hairstyles } from './entities/hairstyles.entity';

@Controller('hairstyles')
export class HairstylesController {
  constructor(private readonly hairstylesService: HairstylesService) {}

  @Get()
  findAll(
    @Query() paginationOptionsDto: PaginationOptionsDto,
  ): Promise<PaginationDto<Hairstyles>> {
    return this.hairstylesService.findAll(paginationOptionsDto);
  }
}
