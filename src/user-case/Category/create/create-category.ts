import { CategoryInterface } from "../../../database/Model/Category/Category";
import { CategoryRepository } from "../../../repositories/category-repositories";

export class CreateCategory {

    constructor(
        private categoryRepository: CategoryRepository
    ) {}
    
    async execute(category: CategoryInterface): Promise<CategoryInterface> {

        let isCreate = await this.categoryRepository.create(category);
        
        return isCreate;
    }
}