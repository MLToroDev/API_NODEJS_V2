import express from 'express';
import * as ProductoController from '../controllers/Producto.controller';
import { Producto } from '../model/Producto';

const router = express.Router();

router.get('/', (req, res) => {
    res.json(ProductoController.GetProductos());
});

export default router;