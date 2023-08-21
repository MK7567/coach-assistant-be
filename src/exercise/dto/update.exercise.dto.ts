import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateExerciseDto } from './create.exercise.dto';

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {
  @IsOptional()
  title?: string;

  @IsOptional()
  description?: string;
}
