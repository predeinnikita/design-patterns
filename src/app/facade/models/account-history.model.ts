export class BankHistory {

    private _history: bankOperation[] = [];
    private _size: number

    constructor(size: number = 5) {
        this._size = size;
    }

    public get history(): bankOperation[] {
        return this._history;
    }

    public save(operation: bankOperation): void {
        if (this._history.length + 1 > this._size) {
            this._history.shift();
        }
        this._history.push(operation);
    }
}

export type bankOperation = {
    type: 'push' | 'pop',
    money: number,
}