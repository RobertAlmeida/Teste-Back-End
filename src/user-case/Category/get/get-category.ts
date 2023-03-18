import { CategoryInterface } from "../../../database/Model/Category/Category";
import { CategoryRepository } from "../../../repositories/category-repositories";


export class GetCategory {

    constructor(
        private categoryRepository: CategoryRepository
    ) { }

    async execute(): Promise<CategoryInterface[]> {

        const data = await this.categoryRepository.getAll();
        return data;
    }
}