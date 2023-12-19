import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Hairstyles {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}
