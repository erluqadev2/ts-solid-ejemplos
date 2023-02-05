import { IVehiculo } from "./IVehiculo";

export class Auto implements IVehiculo {
    acelerar(): void {
        // Auto acelera
    }

    frenar(): void {
        // Auto frena
    }

    estacionar(): void {
        // Auto estaciona
    }

    despegar(): void {
        console.error('Metodo no implementado');
    }

    aterrizar(): void {
        console.error('Metodo no implementado');
    }
}