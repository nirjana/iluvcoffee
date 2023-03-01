// dto let us create a definition for the shape of the data 
// thats commin into the body of an API request

/* UpdateCoffeeDto */
// export class UpdateCoffeeDto {
//   readonly name?: string;
//   readonly brand?: string;
//   readonly flavors?: string[];
// }

import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto";

//PartialType is expecting a type to be passed inside of it,i.e CreateCoffeeDto
//returning the type of class we passed into it with all the properties set to optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto){

}