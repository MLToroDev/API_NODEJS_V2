import express from 'express';
import { validationResult } from 'express-validator';

export const Validar =
    (req: express.Request, res: express.Response,
        next: () => any) => {
        try {
            validationResult(req).throw();
            return next();
        } catch (error) {
            res.status(400).json(error);
        }
    }