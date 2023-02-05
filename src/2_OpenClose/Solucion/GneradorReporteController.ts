import { Order } from "../../beans/Order";
import { GeneradorReporteService } from "./GeneradorReporteService";

export class GeneradorReporteController {
    private generadorReporteService: GeneradorReporteService;

    constructor(generadorReporteService: GeneradorReporteService) {
        this.generadorReporteService = generadorReporteService;
    }

    async generarReporte(orders: Order[]) {
        await this.generadorReporteService.generarReporte(orders);
    }

}