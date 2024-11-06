import {Router}from 'express';
import {getUser, getUsers, loginUser, newUser } from '../controllers/user';


const router = Router();
router.post('/',newUser);
router.post('/login',loginUser);
router.get('/:id',getUser);
router.get('/',getUsers);

export default router;