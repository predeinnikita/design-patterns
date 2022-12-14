export type transportType = 'car' | 'bicycle' | 'bike';

export interface ITransport {
    readonly transportType: transportType;
    readonly name: string;
    readonly description: string;
    readonly wheelCount: number;
}