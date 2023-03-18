import { ProductInterface } from "../../../database/Model/Product/Product";
import { ProductRepository } from "../../../repositories/product-repositories";

export class PutProduct {

    constructor(
        private productRepository: ProductRepository
    ) {}
    
    async execute(category: ProductInterface): Promise<ProductInterface> {

        let isUpdate = await this.productRepository.update(category.id, category);
        
        return isUpdate;
    }
}