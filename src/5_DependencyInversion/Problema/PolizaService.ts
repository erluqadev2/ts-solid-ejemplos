import { Poliza } from "../../beans/Poliza";
import { PolizaDataBaseOracle } from "./PolizaDataBaseOracle";

export class PolizaService {
    private polizaDatabaseOracle: PolizaDataBaseOracle;

    constructor(polizaDatabase: PolizaDataBaseOracle) {
        this.polizaDatabaseOracle = polizaDatabase;
    }

    async guardarPoliza(poliza: Poliza): Promise<boolean> {
        return this.polizaDatabaseOracle.guardarPoliza(poliza);
    }
}