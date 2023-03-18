import { Request, Response } from 'express';
import { ProductInterface } from '../../database/Model/Product/Product';
import { ProductRepositoryProduction } from '../../repositories/productRepositories/productRepositories';
import { PutProduct } from '../../user-case/Product/put/put-product';


const productRepositoryProduction = new ProductRepositoryProduction();

const putProduct = new PutProduct(
    productRepositoryProduction
);

export default (req: Request, res: Response) => {

    if (!req.body.nome || !req.body.descricao || !req.body.id ) {
        return res.status(400).send({ error: "Nome, Id ou Descricao não informados" });
    }

    const product: ProductInterface = {
        nome: req.body.nome,
        descricao: req.body.descricao,
        id: req.body.id
    }

    if (req.body.id_category) {
        product.id_category = req.body.id_category;
    }

    putProduct
        .execute(product)
        .then(value => { return res.status(200).json(value) })
        .catch(reason => { return res.status(500).json(reason) })

}