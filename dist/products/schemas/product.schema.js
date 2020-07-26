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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = exports.ProductSchema = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class ProductSchema extends mongoose_1.Document {
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Number)
], ProductSchema.prototype, "_id", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ProductSchema.prototype, "title", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], ProductSchema.prototype, "quantity", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ProductSchema.prototype, "price", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ProductSchema.prototype, "link", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ProductSchema.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], ProductSchema.prototype, "currency", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ProductSchema.prototype, "brand", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ProductSchema.prototype, "color", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ProductSchema.prototype, "gender", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ProductSchema.prototype, "gtin", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ProductSchema.prototype, "mpn", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ProductSchema.prototype, "condition", void 0);
exports.ProductSchema = ProductSchema;
exports.productModel = typegoose_1.getModelForClass(ProductSchema);
//# sourceMappingURL=product.schema.js.map