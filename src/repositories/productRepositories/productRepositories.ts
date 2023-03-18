import { Category } from "../../database/Model/Category/Category";
import { Product, ProductInterface } from "../../database/Model/Product/Product";
import { ProductRepository } from "../product-repositories";


export class ProductRepositoryProduction implements ProductRepository {

    async update(id: number, data: ProductInterface): Promise<ProductInterface> {
        let updated = await Product.update(data, { where: { id: data.id } });
        return data;
    }
    async delete(id: number): Promise<number> {
        let del = await Product.destroy({ where: { id: id } });
        return del;
    }

    async create(product: ProductInterface | any): Promise<ProductInterface> {
        let create = await Product.create(product);
        return create;
    }

    async getAll(): Promise<ProductInterface[]> {
        let data = await Product.findAll({
            include: [{
                model: Category,
                as: 'category'
            }],
        });
        return data;
    }

}