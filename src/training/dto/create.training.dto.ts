import { IsNotEmpty } from 'class-validator';

export class CreateTrainingDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
