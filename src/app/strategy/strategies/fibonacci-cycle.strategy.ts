import { IFibonacciStrategy } from "../interfaces/fibonacci-strategy.interface";

export class CycleFibonacciStrategy implements IFibonacciStrategy {
    public generateSequence(count: number): number[] {
        const result: number[] = [];
        let n1: number = 0;
        let n2: number = 1;
        let nextTerm: number;
        for (let i = 1; i <= count; i++) {
            result.push(n1)
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }

        return result;
    }
}