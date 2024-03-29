import express, { application } from 'express';
import ProductoRouter from './routes/Producto.router';

const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));

app.use(express.json());
app.use(cors());

app.use('/api/producto', ProductoRouter);

app.listen(PORT, () => {
    console.log(`Servidor conectado ${PORT}`)
});