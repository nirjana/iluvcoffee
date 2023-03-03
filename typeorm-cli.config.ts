import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1677781551915 } from 'src/migrations/1677781551915-CoffeeRefactor';
import { SchemaSync1677782948260 } from 'src/migrations/1677782948260-SchemaSync';
import {DataSource} from 'typeorm'
export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1677781551915, SchemaSync1677782948260],
});