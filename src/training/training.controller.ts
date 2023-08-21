import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TrainingService } from './training.service';
import { Training } from '../entities/training.entity';
import { CreateTrainingDto } from './dto/create.training.dto';
import { UpdateTrainingDto } from './dto/update.training.dto';
import { DeleteResult } from 'typeorm';

@Controller('training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Get()
  findAll(): Promise<Training[]> {
    return this.trainingService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Training> {
    return this.trainingService.findById(id);
  }

  @Post()
  create(@Body() createTrainingDto: CreateTrainingDto) {
    return this.trainingService.create(createTrainingDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTrainingDto: UpdateTrainingDto,
  ): Promise<Training> {
    return this.trainingService.update(id, updateTrainingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<DeleteResult> {
    return this.trainingService.delete(id);
  }
}
