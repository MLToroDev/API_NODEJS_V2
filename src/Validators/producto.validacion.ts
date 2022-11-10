import {check} from 'express-validator'
import express from 'express';
import { Validar } from "../helpers/Validation.helper";

export const ValidateCreate = [
    check('Codigo').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    check('Nombre').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    check('ValorU').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    check('PrecioV').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    check('Cantidad').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    check('Cliente').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    (req: express.Request, res: express.Response, next: () => any) => {
        Validar(req, res, next);
    }
]
export const validateSalida = [
    check('Fecha').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    check('Nombre').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    check('PrecioV').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    check('Cantidad').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    check('Cliente').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    (req: express.Request, res: express.Response, next: () => any) => {
        Validar(req, res, next);
    }
]