import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Training } from './training.entity';
import { Exercise } from './exercise.entity';

@Entity('training_exercise')
export class TrainingExerciseEntity {
  @PrimaryGeneratedColumn()
  trainingId: number;

  @PrimaryGeneratedColumn()
  exerciseId: number;

  @ManyToOne(() => Training, (training) => training.exercises)
  @JoinColumn([{ name: 'training_id', referencedColumnName: 'id' }])
  trainings: Training[];

  @ManyToOne(() => Exercise, (exercise) => exercise.trainings)
  @JoinColumn([{ name: 'exercise_id', referencedColumnName: 'id' }])
  exercises: Exercise[];
}
