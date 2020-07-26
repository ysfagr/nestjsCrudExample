// TODO:  DTO (Data Transfer Object) For Products 

import { IsNotEmpty, IsString, IsInt, IsNumber } from 'class-validator';

export class CreateProductDTO {

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    readonly link: string; // web page

    @IsNotEmpty()
    @IsString()
    readonly price: string; // decimal(10, 2)

    @IsNotEmpty()
    @IsString()
    readonly currency: string; // ISO 4217 currency code

    @IsNotEmpty()
    @IsNumber()
    readonly quantity: number;

    @IsNotEmpty()
    @IsString()
    readonly brand: string; // Brand name

    @IsNotEmpty()
    @IsString()
    readonly color: string; // ex: black, white, pink, etc...

    @IsNotEmpty()
    @IsString()
    readonly gender: string; // enum: male, female, unisex

    @IsNotEmpty()
    @IsString()
    readonly gtin?: string; // global item trade number

    @IsNotEmpty()
    @IsString()
    readonly mpn?: string; // manufacturer part number

    @IsNotEmpty()
    @IsString()
    readonly condition: string; // enum: "new", "used"
    
  
}