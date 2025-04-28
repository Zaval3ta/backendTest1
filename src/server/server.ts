import routes from '@routes/routes';
import express, { Application } from 'express';
import morgan from 'morgan';

const app: Application = express();
app.disable('x-powered-by') //Desahabilita el header X-Powered-By: Express por seguridad

app.use(express.json());
app.use(morgan("dev")); 

app.use("/api", routes())
export default app;