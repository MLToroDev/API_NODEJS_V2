import express from 'express';
import ProductoRouter from './routes/Producto.router';

const app = express();
const PORT = 3000;
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use(express.json());

app.use('/api/producto', ProductoRouter);



app.listen(PORT, () => {
    console.log(`Servidor conectado puerto ${PORT}`)
});