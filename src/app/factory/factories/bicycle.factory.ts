import { ITransport } from "../interfaces/transport.interface";
import { Bicycle } from "../models/bicycle.model";
import { TransportFactory } from "./transport.base.factory";

export class BicycleFactory extends TransportFactory {
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
        return new Bicycle(this._name, this._description)
    }
}