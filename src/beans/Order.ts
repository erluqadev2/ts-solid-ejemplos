export class Order {
    private id: number;
    private total: number;

    constructor(id: number, total: number) {
        this.id = id;
        this.total = total;
    }

    getId(): number {
        return this.id;
    }

    getTotal(): number {
        return this.total;
    }
}