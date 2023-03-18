import { ProductInterface } from "../../../database/Model/Product/Product";
import { ProductRepository } from "../../../repositories/product-repositories";

export class CreateProduct {

    constructor(
        private productRepository: ProductRepository
    ) {}
    
    async execute(product: ProductInterface): Promise<ProductInterface> {

        let isCreate = await this.productRepository.create(product);
        
        return isCreate;
    }
}