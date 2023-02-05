import { IAcelerar } from "./IAcelerar";
import { IAterrizar } from "./IAterrizar";
import { IDespegar } from "./IDespegar";
import { IFrenar } from "./IFrenar";

export class Avion implements IDespegar, IAterrizar, IAcelerar, IFrenar {
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
 
}