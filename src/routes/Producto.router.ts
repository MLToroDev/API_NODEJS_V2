import express, { request } from 'express';
import * as ProductoController from '../controllers/Producto.controller';
import { Producto } from '../model/Producto';
import * as Validaciones from '../Validators/producto.validacion';

const router = express.Router();

router.get('/', (_, res) => {
    ProductoController.GetProductos()
        .then((obj) => {
            res.json(obj);
        }).catch((e) => {
            res.status(500).json(e);
        });
});


router.post('/',  Validaciones.ValidateCreate, (req: express.Request, res: express.Response) => {
    ProductoController.PostProducto(req.body as Producto)
    .then((f) => {
        if (f)
            res.status(201).send();
        else
            res.status(500).send()
    }).catch((e) => {
        res.status(500).json(e);
    });
});

router.get('/:id', (req: express.Request, res: express.Response) => {
    ProductoController.BuscarProductos(req.params.id)
        .then((obj) => {
            res.json(obj);
        }).catch((e) => {
            res.status(500).json(e);
        });
});

export default router;