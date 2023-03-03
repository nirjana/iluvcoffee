/* CoffeesController FINAL CODE */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { /* ... */ HttpStatus, HttpCode } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';


@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesServices: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    // const { limit, offset } = paginationQuery;
    return this.coffeesServices.findAll(paginationQuery);
    // return `This action returns all coffees. Limit ${limit}, offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesServices.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.GONE)

  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    //add console.log to see what type of our request body CreateCoffeeDto is
    console.log(createCoffeeDto instanceof CreateCoffeeDto)
    return this.coffeesServices.create(createCoffeeDto);
    // return `This action creates a coffee`;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesServices.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  removr(@Param('id') id: string) {
     return this.coffeesServices.remove(id);
  }
}
