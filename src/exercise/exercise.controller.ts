import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { ExerciseService } from './exercise.service';
import { Exercise } from '../entities/exercise.entity';
import { UpdateExerciseDto } from './dto/update.exercise.dto';
import { CreateExerciseDto } from './dto/create.exercise.dto';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  findAll(): Promise<Exercise[]> {
    return this.exerciseService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Exercise> {
    return this.exerciseService.findById(id);
  }

  @Post()
  create(@Body() createExerciseDto: CreateExerciseDto) {
    return this.exerciseService.create(createExerciseDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ): Promise<Exercise> {
    return this.exerciseService.update(id, updateExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<DeleteResult> {
    return this.exerciseService.delete(id);
  }
}
