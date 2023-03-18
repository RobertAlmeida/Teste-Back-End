import { Category, CategoryInterface } from "../../database/Model/Category/Category";
import { CategoryRepository } from "../category-repositories";

export class CategoryRepositoryProduction implements CategoryRepository {

    async update(id: number, data: CategoryInterface): Promise<CategoryInterface> {
        let updated =await Category.update(data, { where: { id: data.id } });
        return data;
    }
    async delete(id: number): Promise<number> {
        let del = await Category.destroy({where: {id: id}});
        return del;
    }

    async create(category: CategoryInterface | any): Promise<CategoryInterface> {
        let create = await Category.create(category);
        return create;
    }

    async getAll(): Promise<CategoryInterface[]> {
        let data = await Category.findAll();
        return data;
    }

}