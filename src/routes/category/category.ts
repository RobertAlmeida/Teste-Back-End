import { Router } from 'express';
import deleteCategory from '../../api/category/deleteCategory';
import getCategory from '../../api/category/getCategory';
import postCategory from '../../api/category/postCategory';
import putCategory from '../../api/category/putCategory';
const router = Router();

router.get('/', getCategory)
router.post('/', postCategory)
router.put('/', putCategory)
router.delete('/', deleteCategory)

export default router