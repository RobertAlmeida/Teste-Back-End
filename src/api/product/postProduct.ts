import { Request, Response } from 'express';
import { ProductInterface } from '../../database/Model/Product/Product';
import { ProductRepositoryProduction } from '../../repositories/productRepositories/productRepositories';
import { CreateProduct } from '../../user-case/Product/create/create-product';

const productRepositoryProduction = new ProductRepositoryProduction();

const createProduct = new CreateProduct(
    productRepositoryProduction
);

export default (req: Request, res: Response) => {

    if (!req.body.nome || !req.body.descricao) {
        return res.status(400).send({ error: "Nome ou Descricao não informados" });
    }

    const product: ProductInterface = {
        nome: req.body.nome,
        descricao: req.body.descricao
    }

    if (req.body.id_category) {
        product.id_category = req.body.id_category;
    }

    createProduct
        .execute(product)
        .then(value => { return res.status(200).json(value) })
        .catch(reason => { return res.status(500).json(reason) })

}