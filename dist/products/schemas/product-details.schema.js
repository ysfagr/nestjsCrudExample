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
exports.ProductDetailsSchema = exports.ProductDetails = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductDetails = class ProductDetails extends mongoose_2.Document {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ProductDetails.prototype, "link", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ProductDetails.prototype, "description", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], ProductDetails.prototype, "currency", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ProductDetails.prototype, "brand", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ProductDetails.prototype, "color", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ProductDetails.prototype, "gender", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ProductDetails.prototype, "gtin", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ProductDetails.prototype, "mpn", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ProductDetails.prototype, "condition", void 0);
ProductDetails = __decorate([
    mongoose_1.Schema()
], ProductDetails);
exports.ProductDetails = ProductDetails;
exports.ProductDetailsSchema = mongoose_1.SchemaFactory.createForClass(ProductDetails);
//# sourceMappingURL=product-details.schema.js.map