import { Order } from "../../beans/Order";
import { OrderService } from "./OrderService";

export class OrderController {
    private orderService: OrderService;

    constructor(orderService: OrderService) {
        this.orderService = orderService;
    }

    async crateOrder(order: Order) {
        this.orderService.createOrder(order);
    }

}