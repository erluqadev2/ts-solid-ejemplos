import { Notification } from "../../beans/Notification";
import { Order } from "../../beans/Order";

export class OrderService {

    async createOrder(order: Order) {
        try {
            await this.saveOrder(order);

            await this.createNotification(order);

            await this.sendEmailNotification(Notification);
        } catch (error) {
            console.error(error);
        }
    }

    private async saveOrder(order: Order) {
        // Guardar orden en Base de datos
    }

    private async createNotification(order: Order): Promise<Notification> {
        const notification = new Notification();
        // armar notificacion
        return notification;
    }

    private async sendEmailNotification(notification: Notification) {
        // enviar correo de notifiacion al cliente
    }

}