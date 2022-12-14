import { BankAccount } from "../models/bank-account.model";

export class BankAccountsRepository {
    private _bankAccounts: BankAccount[] = [
        new BankAccount(1, 0),
      ];
    
      public get bankAccounts(): BankAccount[] {
        return this._bankAccounts.slice();
      }
    
      public createBankAccount(): void {
        const nextId = (this._bankAccounts[this._bankAccounts.length - 1]).id + 1;
        this._bankAccounts.push(new BankAccount(nextId));
      }
    
      public getAccountById(id: number): BankAccount | undefined {
        return this._bankAccounts.find(account => account.id === id);
      }
    
      public pushMoney(bankAccountId: number, money: number): void {
        const bankAccount = this.getAccountById(bankAccountId)
        if (bankAccount) {
          bankAccount.push(money);
        }
      }
    
      public popMoney(bankAccountId: number, money: number): void {
        const bankAccount = this.getAccountById(bankAccountId)
        if (bankAccount) {
          bankAccount.pop(money);
        }
      }
}