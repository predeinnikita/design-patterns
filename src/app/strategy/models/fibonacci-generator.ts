import { IFibonacciStrategy } from "../interfaces/fibonacci-strategy.interface";

export class FibonacciGenerator {
    constructor(
        private _fibonacciStrategy: IFibonacciStrategy
    ) {
    }

    public generateSequence(count: number): number[] {
        return this._fibonacciStrategy.generateSequence(count);
    }
}