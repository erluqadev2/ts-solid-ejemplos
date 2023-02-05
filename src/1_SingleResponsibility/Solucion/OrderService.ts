import { Notification } from "../../beans/Notification";
import { Order } from "../../beans/Order";
import { CreateNotificationOrderService } from "./CreateNotificationOrderService";
import { SaveOrderService } from "./SaveOrderService";
import { SendEmailNotificationService } from "./SendEmailNotificationService";

export class OrderService {
    private saveOrderService: SaveOrderService;
    private createNotificationOrderService: CreateNotificationOrderService;
    private sendEmailNotification: SendEmailNotificationService;

    constructor(saveOrderService: SaveOrderService,
        createNotificationOrderService: CreateNotificationOrderService,
        sendEmailNotification: SendEmailNotificationService) {
        this.saveOrderService = saveOrderService;
        this.createNotificationOrderService = createNotificationOrderService;
        this.sendEmailNotification = sendEmailNotification;
    }

    async createOrder(order: Order) {
        try {
            await this.saveOrderService.saveOrder(order);

            const notification: Notification = await this.createNotificationOrderService.crateNotification(order);

            await this.sendEmailNotification.sendEmailNotification(notification);

            console.log('Orden creada correctamente!!!');
        } catch (error) {
            console.error(error);
        }
    }

}