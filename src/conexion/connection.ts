import sql, { Connection, ConnectionPool } from 'mssql';
import {sqlConfig} from './config';

export default async function GetConnection(): Promise<ConnectionPool> {
    try {
        const con = await sql.connect(sqlConfig)
        return con;
    } catch (error) {
        console.error(error);
        throw error;
    }
}