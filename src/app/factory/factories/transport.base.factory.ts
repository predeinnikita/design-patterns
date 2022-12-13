import { ITransport } from "../interfaces/transport.interface";

export abstract class TransportFactory {
    public abstract createTransport(): ITransport;
}