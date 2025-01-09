import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'test2' })
export class Test2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
