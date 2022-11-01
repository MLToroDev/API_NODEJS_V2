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


export const PostProducto = async (P: Producto): Promise<boolean>=> {
    
    try {
       return DaoPersona.AgregarPersonas(P);
      
    } catch (error) {
        throw error;
    }
   
}

export const BuscarProductos = async (Codigo: String): Promise<Producto[]> => {
    try {
        let p: Producto[] = await DaoPersona.BuscarProductos(Codigo);
        return p;
    } catch (error) {
        throw error;
    }
}
