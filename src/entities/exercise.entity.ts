import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Training } from './training.entity';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToMany(() => Training, (training) => training.exercises)
  trainings?: Training[];
}
