import { CategoryRepository } from "../../../repositories/category-repositories";

export class DeleteCategory {

    constructor(
        private categoryRepository: CategoryRepository
    ) { }

    async execute(id: number): Promise<number> {

        let deleted = await this.categoryRepository.delete(id);
        return deleted;
    }
}