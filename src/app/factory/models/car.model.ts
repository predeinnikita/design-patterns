import { ITransport, transportType } from "../interfaces/transport.interface";

export class Car implements ITransport {
    public readonly transportType: transportType;
    public readonly name: string;
    public readonly description: string;
    public readonly wheelCount: number;

    constructor(
        name: string,
        description: string,
    ) {
        this.transportType = 'car';
        this.name = name;
        this.description = description;
        this.wheelCount = 4;
    }
}