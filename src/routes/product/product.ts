import { Router } from 'express';
import deleteCategory from '../../api/product/deleteProduct';
import getCategory from '../../api/product/getProduct';
import postCategory from '../../api/product/postProduct';
import putCategory from '../../api/product/putProduct';
const router = Router();

router.get('/', getCategory)
router.post('/', postCategory)
router.put('/', putCategory)
router.delete('/', deleteCategory)

export default router