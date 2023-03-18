import { Request, Response } from 'express';
import { ProductRepositoryProduction } from '../../repositories/productRepositories/productRepositories';
import { DeleteProduct } from '../../user-case/Product/delete/delete-product';

const productRepositoryProduction = new ProductRepositoryProduction();

const deleteProduct = new DeleteProduct(
    productRepositoryProduction
);

export default (req: Request, res: Response) => {

    if (!req.body.id ) {
        return res.status(400).send({ error: "Id não informados" });
    }

    deleteProduct
        .execute(Number(req.body.id))
        .then(value => { return res.status(200).json(value) })
        .catch(reason => { return res.status(500).json(reason) })

}