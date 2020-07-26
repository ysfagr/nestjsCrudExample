export interface Product {
    title: string;
    quantity: number;
    price: string;
    productDetails?: ProductDetails;
}
export interface ProductDetails {
    id?: number;
    link?: string;
    description: string;
    currency?: number;
    brand?: string;
    color?: string;
    gender?: string;
    gtin?: string;
    mpn?: string;
    condition?: string;
}
export interface UpdateProduct {
    title: string;
    quantity: number;
    price: string;
    link?: string;
    description: string;
    currency?: number;
    brand?: string;
    color?: string;
    gender?: string;
    gtin?: string;
    mpn?: string;
    condition?: string;
}
