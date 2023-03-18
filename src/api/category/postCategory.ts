import { Request, Response } from 'express';
import { CategoryRepositoryProduction } from '../../repositories/categoryRepositories/categoryRepositories';
import { CreateCategory } from '../../user-case/Category/create/create-category';

const categoryRepositoryProduction = new CategoryRepositoryProduction();

const createCategory = new CreateCategory(
    categoryRepositoryProduction
);

export default (req: Request, res: Response) => {

    if (!req.body.nome || !req.body.descricao) {
        return res.status(400).send({ error: "Nome ou Descricao não informados" });
    }

    const category = {
        nome: req.body.nome,
        descricao: req.body.descricao
    }

    createCategory
        .execute(category)
        .then(value => { return res.status(200).json(value) })
        .catch(reason => { return res.status(500).json(reason) })

}