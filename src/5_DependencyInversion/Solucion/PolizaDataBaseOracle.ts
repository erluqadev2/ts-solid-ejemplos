import { Poliza } from "../../beans/Poliza";
import { IPolizaDataBase } from "./IPolizaDataBase";

export class PolizaDataBaseOracle implements IPolizaDataBase {

    async guardarPoliza(poliza: Poliza): Promise<boolean> {
        const conexion: Object = await this.obtenerConexion();
        return this.guardarPolizaDataBase(poliza, conexion);
    }

    async obtenerConexion(): Promise<Object> {
        // Obtenemos conexion Oracle
        return {
            // conexion Oracle
        }
    }

    async guardarPolizaDataBase(poliza: Poliza, conexion: Object): Promise<boolean> {
        // Guardamos en BD Oracle
        return true;
    }
}