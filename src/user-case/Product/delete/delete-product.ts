import { ProductRepository } from "../../../repositories/product-repositories";

export class DeleteProduct {

    constructor(
        private productRepository: ProductRepository
    ) { }

    async execute(id: number): Promise<number> {

        let deleted = await this.productRepository.delete(id);
        return deleted;
    }
}