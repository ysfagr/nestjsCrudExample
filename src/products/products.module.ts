import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { Product } from "./models/product.model";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
 
@Module({
  imports: [TypegooseModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}