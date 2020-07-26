"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const product_model_1 = require("./models/product.model");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async create(product) {
        const createdProduct = new this.productModel(product);
        return await createdProduct.save();
    }
    async findAll() {
        return await this.productModel.find().exec();
    }
    async findOne(id) {
        let results;
        try {
            results = await this.productModel.findOne({ _id: id });
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find product.');
        }
        if (!results) {
            throw new common_1.NotFoundException('Could not find product.');
        }
        return results;
    }
    async delete(id) {
        await Promise.all([
            await this.productModel.deleteOne({ _id: id })
        ]);
        return {
            msg: `product is deleted with id ${id}`,
        };
    }
    async update(id, recordToUpdate) {
        const product = await this.productModel.findOne({ _id: id });
        if (!product) {
            throw new common_1.NotFoundException('Could not find any product');
        }
        await this.productModel.updateOne(product, recordToUpdate);
        return {
            msg: `product is updated with id ${id}`,
        };
    }
};
ProductsService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(product_model_1.Product)),
    __metadata("design:paramtypes", [Object])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map