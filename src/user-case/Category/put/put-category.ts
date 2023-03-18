import { CategoryInterface } from "../../../database/Model/Category/Category";
import { CategoryRepository } from "../../../repositories/category-repositories";

export class PutCategory {

    constructor(
        private categoryRepository: CategoryRepository
    ) {}
    
    async execute(category: CategoryInterface): Promise<CategoryInterface> {

        let isUpdate = await this.categoryRepository.update(category.id, category);
        
        return isUpdate;
    }
}