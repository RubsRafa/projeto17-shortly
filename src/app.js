import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/AuthRoute.js';
import urlRouter from './routes/UrlRoute.js';
dotenv.config(); 

const app = express();
app.use(cors());
app.use(express.json());

app.use([authRouter, urlRouter]);

const port = process.env.PORT;

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}`))