export class BankAccount {
    public readonly id: number;
    private _money: number = 0;

    constructor(id: number, money?: number) {
        this.id = id;
        if (money) {
            this._money = money;
        }
    }

    get money(): number {
        return this._money;
    }

    public push(money: number): void {
        this._money += money;
    }

    public pop(money: number): void {
        if (this._money < money) {
            alert('Невозможно снять больше, чем есть на счете')
            return;
        }
        this._money -= money;
    }    
}