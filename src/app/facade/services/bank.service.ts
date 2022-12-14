import { Injectable } from '@angular/core';
import { BankHistory, bankOperation } from '../models/account-history.model';
import { BankAccount } from '../models/bank-account.model';
import { BankAccountsRepository } from '../repositories/bank-accont.repository';

@Injectable()
export class BankService {
  private _bankAccountsRepository: BankAccountsRepository = new BankAccountsRepository();
  private _bankHistory: BankHistory = new BankHistory();

  public get bankAccounts(): BankAccount[] {
    return this._bankAccountsRepository.bankAccounts;
  }

  public get history(): bankOperation[] {
    return this._bankHistory.history;
  }

  public createBankAccount(): void {
    this._bankAccountsRepository.createBankAccount();
  }

  public getAccountById(id: number): BankAccount | undefined {
    return this._bankAccountsRepository.getAccountById(id);
  }

  public pushMoney(bankAccountId: number, money: number): void {
    this._bankAccountsRepository.pushMoney(bankAccountId, money);
    this._bankHistory.save({ type: 'push', money });
  }

  public popMoney(bankAccountId: number, money: number): void {
    this._bankAccountsRepository.popMoney(bankAccountId, money);
    this._bankHistory.save({ type: 'pop', money });
  }
}
