import { Order } from "../../beans/Order";

export interface GeneradorReporte {
    generarReporte(orders: Order[]): Promise<void>;
}