import {Router}from 'express';
import { deletePersonal, getPersonal, getPersonals, postPersonal, updatePersonal } from '../controllers/personal';
import validateToken from './validate-token';

const router = Router();
router.get('/', validateToken,getPersonals);
router.get('/:id',validateToken,getPersonal);
router.delete('/:id',validateToken,deletePersonal);
router.post('/',validateToken, postPersonal);
router.put('/:id',validateToken, updatePersonal);
export default router;