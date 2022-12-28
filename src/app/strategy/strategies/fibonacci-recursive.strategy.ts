import { IFibonacciStrategy } from "../interfaces/fibonacci-strategy.interface";

export class RecursiveFibonacciStrategy implements IFibonacciStrategy {
    public generateSequence(count: number): number[] {
        const result: number[] = [];

        this._generate(count, result);
        result.sort((a, b) => a - b);

        return result;
    }

    private _generate(count: number, sequence: number[] = []): number[] {
        if (count == 0) {
            sequence.push(0);
            
            return [1, 0];
        }
        const [n_2, n_1] = this._generate(count - 1, sequence);
        sequence.push(n_1 + n_2);

        return [n_1, n_1 + n_2];
    }
}