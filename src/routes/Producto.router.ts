import express, { request } from 'express';
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
    ProductoController.PostProducto(req.body as Producto)
    .then((f)=>{
     if(f)
        res.status(200).send();
       else
       res.status(500).send();
     }).catch{
          
        }

      
});


export default router;