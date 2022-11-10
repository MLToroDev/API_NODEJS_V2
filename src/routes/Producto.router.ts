import express, { request } from 'express';
import * as ProductoController from '../controllers/Producto.controller';
import { Producto } from '../model/Producto';
import * as Validaciones from '../Validators/producto.validacion';
import { ProductoSalida } from "../model/ProductoSalida";

const router = express.Router();

router.get('/', (_, res) => {
    ProductoController.GetProductos()
        .then((obj) => {
            res.json(obj);
        }).catch((e) => {
            res.status(500).json(e);
        });
});

router.get('/salida', (_, res) => {
    ProductoController.GetProductosSalida()
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




router.post('/salida',  Validaciones.validateSalida, (req: express.Request, res: express.Response) => {
    ProductoController.PostProductoSalida(req.body as ProductoSalida)
    .then((f) => {
        if (f)
            res.status(201).send();
        else
            res.status(500).send()
    }).catch((e) => {
        res.status(500).json(e);
    });
});

router.get('/buscar/:id', (req: express.Request, res: express.Response) => {
    ProductoController.BuscarProductos(req.params.id)
        .then((obj) => {
            res.json(obj);
        }).catch((e) => {
            res.status(500).json(e);
        });
});

router.get('/login', (_, res) => {
    ProductoController.GetUsuario()
        .then((obj) => {
            res.json(obj);
        }).catch((e) => {
            res.status(500).json(e);
        });
});


export default router;