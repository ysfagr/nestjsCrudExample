import { prop } from "@typegoose/typegoose";
import { IsString, IsNumber } from "class-validator";


export class Product {  

  @IsString()
  @prop({ required: true })
  title: string;

  @IsNumber()
  @prop({ required: true })
  quantity: number;

  @IsString()
  @prop({ required: true })
  price: string;

  @IsString()
  @prop({ required: true })
  link: string;

  @IsString()
  @prop({ required: true })
  description: string; 

  @IsString()
  @prop({ required: true })
  currency: string;
  
  @IsString()
  @prop({ required: true })
  brand: string;

  @IsString()
  @prop({ required: true })
  color: string;

  @prop({ required: true })
  gender: string;

  @IsString()
  @prop({ required: true })
  gtin: string;

  @IsString()
  @prop({ required: true})
  mpn: string;

  @IsString()
  @prop({ required: true })
  condition: string;

}
