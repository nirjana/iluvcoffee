import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'; //video :Creating a TypeORM Entity

@Entity() //each entity class represent a sql table //sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn() //define id here as the primary column as well as autoincrement
  id: number;

  @Column()
  name: string;

  @Column() //each column here is "not" nullable, REQUIRED by default
  brand: string;

  @Column('json', { nullable: true })//typeorm now knows that flavor should store arrays as JSON
  flavors: string[];
}
