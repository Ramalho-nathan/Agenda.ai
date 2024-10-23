import express from 'express';
import { registerUser, loginUser } from '../controllers/userController'; //Controladores lógicos

const router = express.Router();

router.post('/register', registerUser); //Rota para Cadastro

router.post('/login', loginUser); //Rota para Login

export default router
