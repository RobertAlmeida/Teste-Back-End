import { ProductInterface } from "../../../database/Model/Product/Product";
import { ProductRepository } from "../../../repositories/product-repositories";


export class GetProduct {

    constructor(
        private productRepository: ProductRepository
    ) { }

    async execute(): Promise<ProductInterface[]> {

        const data = await this.productRepository.getAll();
        return data;
    }
}