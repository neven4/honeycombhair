import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hairstyles } from './entities/hairstyles.entity';
import { PaginationOptionsDto } from 'src/common/pagination/PaginationOptions.dto';
import { PaginationDto } from 'src/common/pagination/Pagination.dto';

@Injectable()
export class HairstylesService {
  constructor(
    @InjectRepository(Hairstyles)
    private hairstyleRepository: Repository<Hairstyles>,
  ) {}
  async findAll(
    paginationOptionsDto: PaginationOptionsDto,
  ): Promise<PaginationDto<Hairstyles>> {
    const queryBuilder = this.hairstyleRepository
      .createQueryBuilder('hairstyles')
      .select()
      .skip(paginationOptionsDto.skip)
      .orderBy('hairstyles.name', paginationOptionsDto.order)
      .take(paginationOptionsDto.take);

    if (paginationOptionsDto.search) {
      queryBuilder.where('to_tsvector(hairstyles.name) @@ to_tsquery(:name)', {
        name: `${paginationOptionsDto.search}:*`,
      });
    }

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    return new PaginationDto(entities, {
      paginationOptionsDto,
      itemCount,
    });
  }
}
