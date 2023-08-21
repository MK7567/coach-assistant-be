import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Training } from '../entities/training.entity';
import { DeleteResult, Repository } from 'typeorm';
import { UpdateTrainingDto } from './dto/update.training.dto';
import { CreateTrainingDto } from './dto/create.training.dto';

@Injectable()
export class TrainingService {
  constructor(
    @InjectRepository(Training)
    private readonly trainingrepository: Repository<Training>,
  ) {}

  async findAll(): Promise<Training[]> {
    return await this.trainingrepository.find();
  }

  async findById(id: number): Promise<Training> {
    return await this.trainingrepository.findOneBy({ id });
  }

  create(createTrainingDto: CreateTrainingDto) {
    const newTraining = this.trainingrepository.create(createTrainingDto);
    return this.trainingrepository.save(newTraining);
  }

  async update(
    id: number,
    updateTrainingDto: UpdateTrainingDto,
  ): Promise<Training> {
    await this.trainingrepository.update(id, updateTrainingDto);
    return this.findById(id);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.trainingrepository.delete(id);
  }
}
