export class FlavorEntity {}
import { Column, Entity,  ManyToMany,  PrimaryGeneratedColumn } from 'typeorm'; //video :Creating a TypeORM Entity
import { Coffee } from './coffee.entity';

@Entity() //each entity class represent a sql table //sql table === 'coffee'
export class Flavor {
  @PrimaryGeneratedColumn() //define id here as the primary column as well as autoincrement
  id: number;

  @Column()
  name: string;

  @ManyToMany(type =>Coffee, coffee => coffee.flavors)
  coffees:Coffee[];

 
}
