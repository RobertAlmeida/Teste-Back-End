import { Request, Response } from 'express';
import { ProductRepositoryProduction } from '../../repositories/productRepositories/productRepositories';
import { GetProduct } from '../../user-case/Product/get/get-product';

const productRepositoryProduction = new ProductRepositoryProduction();

const getCategory = new GetProduct(
    productRepositoryProduction
);

export default (req: Request, res: Response) => {

    getCategory
        .execute()
        .then(value => { return res.status(200).json(value) })
        .catch(reason => { return res.status(500).json(reason) })

}