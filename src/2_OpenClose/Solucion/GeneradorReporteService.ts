import { Order } from "../../beans/Order";
import { GeneradorReporte } from "./GeneradorReporte";

export class GeneradorReporteService {
    private generadorReporte: GeneradorReporte;

    constructor(generadorReporte: GeneradorReporte) {
        this.generadorReporte = generadorReporte;
    }

    async generarReporte(orders: Order[]) {
        await this.generadorReporte.generarReporte(orders);
    }

}