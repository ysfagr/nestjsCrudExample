import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { Product } from "./models/product.model";
import { ReturnModelType } from "@typegoose/typegoose";
import { CreateProductDTO } from "./dto/create-product.dto";
import { UpdateProductDTO } from "./dto/update-product.dto";


@Injectable()
export class ProductsService {

  constructor(
    @InjectModel(Product) private readonly productModel: ReturnModelType<typeof Product>
   ) { }

  /* CREATE */
  async create(product: CreateProductDTO): Promise<Product> {
    // save the data in product details
    const createdProduct = new this.productModel(product);
    return await createdProduct.save();
  }

  /* FINDALL */
  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  /* FIND */
  async findOne(id: string): Promise<Product> {
    let results;
    try {
    results = await this.productModel.findOne({_id: id});
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!results) {
      throw new NotFoundException('Could not find product.');
    }
    return results;
  }

  /* DELETE */
  async delete(id: string): Promise<any> {
    await Promise.all([
      await this.productModel.deleteOne({_id: id})     
    ]);
    return {
      msg: `product is deleted with id ${id}`,
    };
  }

  /* UPDATE */
  async update(id: string, recordToUpdate: UpdateProductDTO): Promise<any> {
    // return await this.productRepository.update(id, recordToUpdate);
    const product = await this.productModel.findOne({_id :id});
    if (!product) {
      throw new NotFoundException('Could not find any product');
    }
    
    await this.productModel.updateOne(product,recordToUpdate);    
    return {
      msg: `product is updated with id ${id}`,
    };
  }

  
}
