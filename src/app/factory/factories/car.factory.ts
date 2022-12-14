import { ITransport } from "../interfaces/transport.interface";
import { Car } from "../models/car.model";
import { TransportFactory } from "./transport.base.factory";

export class CarFactory extends TransportFactory {
    private readonly _name: string;
    private readonly _description: string;

    constructor(
        name: string,
        description: string,
    ) {
        super();
        this._name = name;
        this._description = description;
    }

    public createTransport(): ITransport {
        return new Car(this._name, this._description)
    }
}