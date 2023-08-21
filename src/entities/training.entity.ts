import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Exercise } from './exercise.entity';

@Entity('trainings')
export class Training {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.trainings)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToMany(() => Exercise, (exercise) => exercise.trainings)
  @JoinTable({
    name: 'training_exercise',
    joinColumn: {
      name: 'training_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'exercise_id',
      referencedColumnName: 'id',
    },
  })
  exercises?: Exercise[];
}
