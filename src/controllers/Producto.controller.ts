import { Producto } from "../model/Producto";
import * as DaoPersona from '../DAO/producto.dao'

export const GetProductos = async (): Promise<Producto[]> => {
    try {
        let p: Producto[] = await DaoPersona.ListarPersonas();
        return p;
    } catch (error) {
        throw error;
    }
}


export const PostProducto = (P: Producto): boolean => {
    console.log(P);
    return true;
}