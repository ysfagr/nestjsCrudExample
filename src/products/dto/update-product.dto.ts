// TODO:  DTO (Data Transfer Object) For Products
import { IsString, IsInt, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDTO {

    @IsOptional()
    @IsInt()
    readonly title: string;
    @IsOptional()
    @IsString()
    readonly description: string;
    @IsOptional()
    @IsString()
    readonly link: string; // web page
    @IsOptional()
    @IsString()
    readonly price: string; // decimal(10, 2)
    @IsOptional()
    @IsString()
    readonly currency: string; // ISO 4217 currency code
    @IsOptional()
    @IsNumber()
    readonly quantity: number;
    @IsOptional()
    @IsString()
    readonly brand: string; // Brand name
    @IsOptional()
    @IsString()
    readonly color: string; // ex: black, white, pink, etc...
    @IsOptional()
    @IsString()
    readonly gender: string; // enum: male, female, unisex
    @IsOptional()
    @IsString()
    readonly gtin?: string; // global item trade number
    @IsOptional()
    @IsString()
    readonly mpn?: string; // manufacturer part number
    @IsOptional()
    @IsString()
    readonly condition: string; // enum: "new", "used"
}