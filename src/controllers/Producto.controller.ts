import { Producto } from "../model/Producto";
import * as DaoPersona from '../DAO/producto.dao'
import { Usuario } from "../model/usuario";
import { ProductoSalida } from "../model/ProductoSalida";


export const GetProductos = async (): Promise<Producto[]> => {
    try {
        let p: Producto[] = await DaoPersona.ListarPersonas();
        return p;
    } catch (error) {
        throw error;
    }
}

export const GetProductosSalida = async (): Promise<ProductoSalida[]> => {
    try {
        let p: ProductoSalida[] = await DaoPersona.ListarProductoSalida();
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
export const PostProductoSalida = async (P: ProductoSalida): Promise<boolean>=> {
    
    try {
       return DaoPersona.AgregarSalida(P);
      
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
export const GetUsuario = async (): Promise<Usuario[]> => {
    try {
        let p: Usuario[] = await DaoPersona.BusquedaUsuario();
        return p;
    } catch (error) {
        throw error;
    }
}
