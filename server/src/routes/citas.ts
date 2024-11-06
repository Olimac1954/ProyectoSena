import {Router}from 'express';
import { deleteCitas, getCita, getCitas, postCitas, updateCitas } from '../controllers/citas';
import validateToken from './validate-token';

const router = Router();
router.get('/',validateToken,getCitas);
router.get('/:id',getCita);
router.delete('/:id',validateToken,deleteCitas);
router.post('/',postCitas);
router.put('/:id',updateCitas);
export default router;