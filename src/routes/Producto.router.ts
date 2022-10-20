import express from 'express';
import * as ProductoController from '../controllers/Producto.controller';
import { Producto } from '../model/Producto';

const router = express.Router();

router.get('/', (_, res) => {
    ProductoController.GetProductos()
        .then((obj) => {
            res.json(obj);
        }).catch((e) => {
            res.status(500).json(e);
        });
});

router.post('/', (req, res) => {
    if (ProductoController.PostProducto(req.body as Producto))
        res.status(201).send();
    else
        res.status(500).send();
});


export default router;