import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './models/product.model';
import { UpdateProductDTO } from './dto/update-product.dto';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    create(product: CreateProductDTO): Promise<Product>;
    find(): Promise<Product[]>;
    findOne(prodId: string): Promise<Product>;
    delete(prodId: string): Promise<Product>;
    update(prodId: string, recordToUpdate: UpdateProductDTO): Promise<Product>;
}
