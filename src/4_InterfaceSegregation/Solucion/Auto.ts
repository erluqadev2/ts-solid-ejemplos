import { IAcelerar } from "./IAcelerar";
import { IEstacionar } from "./IEstacionar";
import { IFrenar } from "./IFrenar";

export class Auto implements IAcelerar, IFrenar, IEstacionar {
    acelerar(): void {
        // Auto acelera
    }

    frenar(): void {
        // Auto frena
    }

    estacionar(): void {
        // Auto estaciona
    }
}