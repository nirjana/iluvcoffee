import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';


//video: Creating a TypeORM Entity
//forFeature registers TypeOrm in this child module 
@Module({ 
    imports:[TypeOrmModule.forFeature([Coffee,Flavor])],
    controllers: [CoffeesController], providers:[CoffeesService]})
//
export class CoffeesModule {}
