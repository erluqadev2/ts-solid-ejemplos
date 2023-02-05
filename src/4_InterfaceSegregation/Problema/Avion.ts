import { IVehiculo } from "./IVehiculo";

export class Avion implements IVehiculo {
    despegar(): void {
        // Avion Despega
    }

    aterrizar(): void {
        // Avion Aterriza
    }

    frenar(): void {
        // Avion Frena
    }

    acelerar(): void {
        // Avion Acelera
    }

    estacionar(): void {
        console.error('Metodo no implementado');
    }
}