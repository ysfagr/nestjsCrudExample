import { Document } from 'mongoose';
export declare class ProductDetails extends Document {
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
export declare const ProductDetailsSchema: import("mongoose").Schema<any>;
