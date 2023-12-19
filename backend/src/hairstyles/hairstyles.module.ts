import { Module } from '@nestjs/common';
import { HairstylesService } from './hairstyles.service';
import { HairstylesController } from './hairstyles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hairstyles } from './entities/hairstyles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hairstyles])],
  controllers: [HairstylesController],
  providers: [HairstylesService],
})
export class HairstylesModule {}
