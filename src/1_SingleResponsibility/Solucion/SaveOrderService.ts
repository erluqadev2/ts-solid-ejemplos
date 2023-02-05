import { Order } from "../../beans/Order";

export class SaveOrderService {

    async saveOrder(order: Order): Promise<Order> {
        // guardar orden en base de datos
        return order;
    }
}