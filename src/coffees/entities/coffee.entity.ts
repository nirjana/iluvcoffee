import { Column, Entity,  JoinTable,  ManyToMany,  PrimaryGeneratedColumn } from 'typeorm'; //video :Creating a TypeORM Entity
import { Flavor } from './flavor.entity';

@Entity() //each entity class represent a sql table //sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn() //define id here as the primary column as well as autoincrement
  id: number;

  @Column()
  name: string;

  @Column() //each column here is "not" nullable, REQUIRED by default
  brand: string;


  // @Column('json', { nullable: true })//typeorm now knows that flavor should store arrays as JSON
 
  @JoinTable()
  @ManyToMany(type => Flavor,(flavor) => flavor.coffees) //function that returns a refrence to the entity
   flavors: string[];

 
}
