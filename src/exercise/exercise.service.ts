import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exercise } from '../entities/Exercise.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateExerciseDto } from './dto/create.exercise.dto';
import { UpdateExerciseDto } from './dto/update.exercise.dto';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(Exercise)
    private readonly exerciserepository: Repository<Exercise>,
  ) {}

  async findAll(): Promise<Exercise[]> {
    return await this.exerciserepository.find();
  }

  async findById(id: number): Promise<Exercise> {
    return await this.exerciserepository.findOneBy({ id });
  }

  create(createExerciseDto: CreateExerciseDto) {
    const newExercise = this.exerciserepository.create(createExerciseDto);
    return this.exerciserepository.save(newExercise);
  }

  async update(
    id: number,
    updateExerciseDto: UpdateExerciseDto,
  ): Promise<Exercise> {
    await this.exerciserepository.update(id, updateExerciseDto);
    return this.findById(id);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.exerciserepository.delete(id);
  }
}
