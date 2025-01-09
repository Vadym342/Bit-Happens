import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Test1 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
