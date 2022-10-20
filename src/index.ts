import express from 'express';
import ProductoRouter from './routes/Producto.router';

const app = express();
const PORT = 3000;
app.use(express.json());


app.use('/api/producto', ProductoRouter);


app.listen(PORT, () => {
    console.log(`Servidor conectado puerto ${PORT}`)
});