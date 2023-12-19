import { IsArray } from 'class-validator';
import { PaginationOptionsDto } from './PaginationOptions.dto';

export class PaginationDto<T> {
  @IsArray()
  readonly data: T[];

  readonly page: number;

  readonly take: number;

  readonly itemCount: number;

  readonly pageCount: number;

  readonly hasPreviousPage: boolean;

  readonly hasNextPage: boolean;

  constructor(
    data: T[],
    {
      paginationOptionsDto,
      itemCount,
    }: {
      paginationOptionsDto: PaginationOptionsDto;
      itemCount: number;
    },
  ) {
    this.data = data;
    this.page = paginationOptionsDto.page;
    this.take = paginationOptionsDto.take;
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}
