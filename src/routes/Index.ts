import { Router } from 'express';
import category from './category/category';
import product from './product/product';

export default (app: Router) => {
    app.use(`/category`, category);
    app.use(`/product`, product);
};
