import {Router}from 'express';


import { deleteVentas, getVenta, getVentas, postVentas, updateVentas } from '../controllers/ventas';
import validateToken from './validate-token';

const router = Router();
router.get('/',getVentas);
router.get('/:id',getVenta);
router.delete('/:id',validateToken,deleteVentas);
router.post('/',postVentas);
router.put('/:id',updateVentas);
export default router;