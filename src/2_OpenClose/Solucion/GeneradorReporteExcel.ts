import { Order } from "../../beans/Order";
import { GeneradorReporte } from "./GeneradorReporte";

export class GeneradorReporteExcel implements GeneradorReporte {

    async generarReporte(orders: Order[]): Promise<void> {
        // Generar reporte Excel
    }

}