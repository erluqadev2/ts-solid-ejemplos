import { Poliza } from "../../beans/Poliza";

export interface IPolizaDataBase {
    guardarPoliza(poliza: Poliza): Promise<boolean>;
    obtenerConexion(): Promise<Object>;
    guardarPolizaDataBase(poliza: Poliza, conexion: Object): Promise<boolean>;
}