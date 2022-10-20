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