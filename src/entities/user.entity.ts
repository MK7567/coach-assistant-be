import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Training } from './training.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Training, (training) => training.user)
  trainings: Training[];
}
