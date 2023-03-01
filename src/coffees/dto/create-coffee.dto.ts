import { IsString } from "class-validator";
/* CreateCoffeeDto */
export class CreateCoffeeDto {  

@IsString()//use @IsString() decorator to make name, brand and flavors required
  readonly name: string;

@IsString()
  readonly brand: string;

@IsString({each:true})//each:true indicate the expected value is an array of string
  readonly flavors: string[];
}
