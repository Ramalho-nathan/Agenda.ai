import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import useRoutes from './routes/useRouter';

dotenv.config();
const app = express();

//middlewares
app.use(cors());
app.use(express.json()); //Permitir o Express a ler json

//Rotas
app.use('/api/users', useRoutes);

//Porta
const PORT = process.env.PORT || 5000; //Se não tiver uma porta no arquivo env ele usa a 5000




app.listen(PORT, () =>{ console.log(`server Rodando na porta ${PORT}`)})



