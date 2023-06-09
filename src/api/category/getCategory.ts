import { Request, Response } from 'express';
import { CategoryRepositoryProduction } from '../../repositories/categoryRepositories/categoryRepositories';
import { GetCategory } from '../../user-case/Category/get/get-category';

const categoryRepositoryProduction = new CategoryRepositoryProduction();

const getCategory = new GetCategory(
    categoryRepositoryProduction
);

export default (req: Request, res: Response) => {

    getCategory
        .execute()
        .then(value => { return res.status(200).json(value) })
        .catch(reason => { return res.status(500).json(reason) })

}