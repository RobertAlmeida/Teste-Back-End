import { Request, Response } from 'express';
import { CategoryRepositoryProduction } from '../../repositories/categoryRepositories/categoryRepositories';
import { DeleteCategory } from '../../user-case/Category/delete/delete-category';

const categoryRepositoryProduction = new CategoryRepositoryProduction();

const deleteCategory = new DeleteCategory(
    categoryRepositoryProduction
);

export default (req: Request, res: Response) => {

    if (!req.body.id ) {
        return res.status(400).send({ error: "Id não informados" });
    }

    deleteCategory
        .execute(Number(req.body.id))
        .then(value => { return res.status(200).json(value) })
        .catch(reason => { return res.status(500).json(reason) })

}