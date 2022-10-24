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
/*export const AgregarPersonas = async (p: Producto):  => {
   try {
    let tsql = `Insert into Producto values (${p.Codigo},${p.Nombre},${p.Cantidad},`;
        const pool = await GetConnection();
        let rs = await pool.query<Producto>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
   } catch (error) {
    
   }
}*/