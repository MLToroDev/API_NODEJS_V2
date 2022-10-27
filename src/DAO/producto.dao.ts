import GetConnection from "../conexion/connection";
import { Producto } from "../model/Producto";

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