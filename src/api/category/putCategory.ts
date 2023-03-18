import { Request, Response } from 'express';
import { CategoryRepositoryProduction } from '../../repositories/categoryRepositories/categoryRepositories';
import { PutCategory } from '../../user-case/Category/put/put-category';

const categoryRepositoryProduction = new CategoryRepositoryProduction();

const putCategory = new PutCategory(
    categoryRepositoryProduction
);

export default (req: Request, res: Response) => {

    if (!req.body.nome || !req.body.descricao || !req.body.id ) {
        return res.status(400).send({ error: "Nome, Id ou Descricao não informados" });
    }

    const category = {
        nome: req.body.nome,
        descricao: req.body.descricao,
        id: req.body.id
    }

    putCategory
        .execute(category)
        .then(value => { return res.status(200).json(value) })
        .catch(reason => { return res.status(500).json(reason) })

}