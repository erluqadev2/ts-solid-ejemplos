import { Order } from "../../beans/Order";

export enum ReportTypes {
    PDF,
    EXCEL
}

export class GeneradorReporteService {

    async generarReporte(orders: Order[], reportType: ReportTypes) {
        if (reportType === ReportTypes.PDF) {
            this.generarReportePDF(orders);
        } else if (reportType === ReportTypes.EXCEL) {
            this.generarReporteExcel(orders);
        } else {
            console.error('Tipo de Reporte no soportado');
        }
    }

    async generarReportePDF(orders: Order[]) {
        // Generar reporte PDF
    }

    async generarReporteExcel(orders: Order[]) {
        // Generar reporte Excel
    }

}