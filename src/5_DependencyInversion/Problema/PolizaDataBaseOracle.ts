import { Poliza } from "../../beans/Poliza";

export class PolizaDataBaseOracle {
    async guardarPoliza(poliza: Poliza): Promise<boolean> {
        const conexion: Object = await this.obtenerConexion();

        return this.guardarPolizaOracle(poliza, conexion);
    }

    async obtenerConexion(): Promise<Object> {
        return {
            // retorno objeto de conexion
        }
    }

    async guardarPolizaOracle(poliza: Poliza, conexion: Object): Promise<boolean> {
        // guardar Poliza en BD Oracle
        return true;
    }
}