import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm'; //video :Creating a TypeORM Entity
import { Flavor } from './flavor.entity';

@Entity() //each entity class represent a sql table //sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn() //define id here as the primary column as well as autoincrement
  id: number;


  @Column()
  title: string;

@Column({nullable:true})
description: string;

  @Column() //each column here is "not" nullable, REQUIRED by default
  brand: string;

  // @Column('json', { nullable: true })//typeorm now knows that flavor should store arrays as JSON

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable()
  @ManyToMany(type => Flavor, flavor => flavor.coffees, {
    cascade: true, // 👈 or optionally just insert or update ['insert']
  }) //function that returns a refrence to the entity
  flavors: Flavor[];
}
