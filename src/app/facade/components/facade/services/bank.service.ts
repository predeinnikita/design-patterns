import { Injectable } from '@angular/core';
import { BankAccount } from 'src/app/facade/models/bank-account.model';

@Injectable()
export class BankService {
  private _bankAccounts: BankAccount[] = [
    new BankAccount(1, 0),
  ];

  public get bankAccounts(): BankAccount[] {
      return this._bankAccounts.slice();
  }

  public createBankAccount(): void {
      this._bankAccounts.push(new BankAccount((this._bankAccounts[this._bankAccounts.length - 1]).id + 1));
  }

  public getAccountById(id: number): BankAccount | undefined {
      return this._bankAccounts.find(account => account.id === id);
  }
}
