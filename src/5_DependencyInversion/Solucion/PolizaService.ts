import { Poliza } from "../../beans/Poliza";
import { IPolizaDataBase } from "./IPolizaDataBase";

export class PolizaService {
    private polizaDataBase: IPolizaDataBase;

    constructor(polizaDataBase: IPolizaDataBase) {
        this.polizaDataBase = polizaDataBase;
    }

    async guardarPoliza(poliza: Poliza): Promise<boolean> {
        return this.polizaDataBase.guardarPoliza(poliza);
    }

}