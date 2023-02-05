import { Order } from "../../beans/Order";
import { Notification  } from "../../beans/Notification";

export class CreateNotificationOrderService {

    async crateNotification(order: Order): Promise<Notification> {
        const notification: Notification = new Notification();
        // armar notificacion
        return notification;
    }

}