import { Order } from "../../beans/Order";
import { GeneradorReporteService, ReportTypes } from "./GeneradorReporteService";

export class GeneradorReporteController {
    private generadorReporteService: GeneradorReporteService;

    constructor(generadorReporteService: GeneradorReporteService) {
        this.generadorReporteService = generadorReporteService;
    }

    async generarReportePDF(orders: Order[]) {
        this.generadorReporteService.generarReporte(orders, ReportTypes.PDF);
    }

    async generarReporteExcel(orders: Order[]) {
        this.generadorReporteService.generarReporte(orders, ReportTypes.EXCEL);
    }

}