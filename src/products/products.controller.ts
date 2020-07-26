import {
  Controller,
  Post,
  Get,
  HttpCode,
  Header,
  Redirect,
  Query,
  Param,
  Body,
  Delete,
  HttpException,
  HttpStatus,
  ForbiddenException,
  NotFoundException,
  UseFilters,
  UseInterceptors,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './models/product.model';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';
import { UpdateProductDTO } from './dto/update-product.dto';

@Controller('products')
// @UseFilters(HttpExceptionFilter) 
@UseInterceptors(TransformInterceptor)
export class ProductsController {
  constructor(private productService: ProductsService) { }
  /** POST A PRODUCT */
  @Post()
  async create(@Body() product: CreateProductDTO): Promise<Product> {
    return await this.productService.create(product);
  }
 /** GET ALL PRODUCT */
  @Get()
  async find(): Promise<Product[]> {
    return await this.productService.findAll();
  }
/** GET ID PRODUCT */
  @Get(':products/:id')
  async findOne(@Param('id') prodId: string): Promise<Product> {
    return await this.productService.findOne(prodId);
  }
/** DELETE A PRODUCT */
  @Delete(':products/:id')
  async delete(@Param('id') prodId: string): Promise<Product> {
    return await this.productService.delete(prodId);
  }
/** UPDATE A PRODUCT */
  @Put(':products/:id')
  async update(@Param('id') prodId: string, @Body() recordToUpdate: UpdateProductDTO,): Promise<Product> {
    return await this.productService.update(prodId, recordToUpdate);
  }
}
