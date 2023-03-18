import { CategoryInterface } from "../database/Model/Category/Category";

export interface CategoryRepository {
    create(data: CategoryInterface): Promise<CategoryInterface | null>
    getAll(): Promise<CategoryInterface[]>
    update(id: number, data: any): Promise<CategoryInterface | null>
    delete(id:number): Promise<number>
}