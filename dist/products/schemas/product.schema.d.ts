import { Document } from 'mongoose';
export declare class ProductSchema extends Document {
    _id: number;
    title: string;
    quantity: number;
    price: string;
    link: string;
    description: string;
    currency: number;
    brand: string;
    color: string;
    gender: string;
    gtin: string;
    mpn: string;
    condition: string;
}
export declare const productModel: import("@typegoose/typegoose").ReturnModelType<typeof ProductSchema, {}>;
