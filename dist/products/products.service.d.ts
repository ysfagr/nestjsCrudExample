import { Product } from "./models/product.model";
import { ReturnModelType } from "@typegoose/typegoose";
import { CreateProductDTO } from "./dto/create-product.dto";
import { UpdateProductDTO } from "./dto/update-product.dto";
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: ReturnModelType<typeof Product>);
    create(product: CreateProductDTO): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    delete(id: string): Promise<any>;
    update(id: string, recordToUpdate: UpdateProductDTO): Promise<any>;
}
