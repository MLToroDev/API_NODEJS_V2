import GetConnection from "../conexion/connection";
import { Producto } from "../model/Producto";
import { Usuario } from "../model/usuario";
import { ProductoSalida } from "../model/ProductoSalida";

export const ListarPersonas = async (): Promise<Producto[]> => {
    try {
        let tsql = "SELECT * FROM Producto";
        const pool = await GetConnection();
        let rs = await pool.query<Producto>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const ListarProductoSalida = async (): Promise<ProductoSalida[]> => {
    try {
        let tsql = "SELECT * FROM Salida";
        const pool = await GetConnection();
        let rs = await pool.query<ProductoSalida>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}
export async function AgregarPersonas(p: Producto):Promise<boolean> {
   try {
    let tsql = `Insert into Producto (Codigo, Nombre,Cantidad,ValorU,PrecioV,Cliente) values (${p.Codigo},'${p.Nombre}',${p.Cantidad},${p.ValorU},${p.PrecioV},'${p.Cliente}')`;
        const pool = await GetConnection();
        let rs = await pool.query(tsql);
        if (rs != undefined) {
            return rs.rowsAffected.length==1;
        }
        return false;
   } catch (error) {
    throw error;
   }
}
export async function AgregarSalida(p: ProductoSalida):Promise<boolean> {
    try {
     let tsql = `Insert into salida (Nombre,Fecha,Cantidad,PrecioV,Cliente) values ('${p.Nombre}','${p.Fecha}',${p.Cantidad},${p.PrecioV},'${p.Cliente}')`;
         const pool = await GetConnection();
         let rs = await pool.query(tsql);
         if (rs != undefined) {
             return rs.rowsAffected.length==1;
         }
         return false;
    } catch (error) {
     throw error;
    }
 }
export const BuscarProductos = async (codigo: String): Promise<Producto[]> => {
    try {
        let tsql = `SELECT * FROM Producto where codigo = ${codigo}`;
        const pool = await GetConnection();
        let rs = await pool.query<Producto>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}
export const BusquedaUsuario = async (): Promise<Usuario[]> => {
    try {
        let tsql = "Select * from Usuarios";
        const pool = await GetConnection();
        let rs = await pool.query<Usuario>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }

}