import { ProductInterface } from "../database/Model/Product/Product"


export interface ProductRepository {
    create(data: ProductInterface): Promise<ProductInterface | null>
    getAll(): Promise<ProductInterface[]>
    update(id: number, data: any): Promise<ProductInterface | null>
    delete(id:number): Promise<number>
}