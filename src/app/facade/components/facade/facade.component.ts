import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BankHistory, bankOperation } from '../../models/account-history.model';
import { BankAccount } from '../../models/bank-account.model';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.scss']
})
export class FacadeComponent {
  /*
  * Пример без фасада, в котором BankAccount и BankHistory 
  * используются напрямую без класса-посредника
  */
  public bankAccountsBadExample: BankAccount[] = [
    new BankAccount(1, 0),
  ];
  
  public bankHistoryBadExample: BankHistory = new BankHistory(5);
  public currentBankAccountBadExample: BankAccount | undefined; 

  public formGroupBadExample: FormGroup = new FormGroup({
    money: new FormControl(0, Validators.required),
  });

  public onCreateNewBankAccountBadExample(): void {
    this.bankAccountsBadExample.push(
      new BankAccount(this.bankAccountsBadExample[this.bankAccountsBadExample.length - 1].id + 1)
    );
  }

  public onPushMoneyBadExample(): void {
    const money = Number(this.formGroupBadExample.controls['money'].value);
    this.bankHistoryBadExample.save({ type: 'push', money })
    this.currentBankAccountBadExample?.push(money);
  }

  public onPopMoneyBadExample(): void {
    const money = Number(this.formGroupBadExample.controls['money'].value);
    if (this.currentBankAccountBadExample && money && this.currentBankAccountBadExample?.money < money) {
      alert('Нельзя снять больше, чем есть на счете');
      return;
    }
    this.currentBankAccountBadExample?.pop(money);
    this.bankHistoryBadExample.save({ type: 'pop', money })
  }

  public onSelectBankAccountBadExample(bankAccountId: number): void {
    this.currentBankAccountBadExample = this.bankAccountsBadExample.find(account => account.id === Number(bankAccountId));
  }

  /*
  * Пример с использованием паттерна фасад, где фасадом является BankService,
  * который объединяет логику модулей BankHistory и BankAccountsRepository
  */
  constructor(
    private _bankService: BankService
  ) {
  }

  public currentBankAccountId: number = -1;
  public currentBankAccount: BankAccount | undefined;

  public formGroup: FormGroup = new FormGroup({
    money: new FormControl(0, Validators.required),
  });

  public get bankAccounts(): BankAccount[] {
    return this._bankService.bankAccounts;
  }

  public get history(): bankOperation[] {
    return this._bankService.history;
  }

  public onCreateNewBankAccount(): void {
    this._bankService.createBankAccount();
  }

  public onPushMoney(): void {
    const money: number = Number(this.formGroup.controls['money'].value);
    this._bankService.pushMoney(this.currentBankAccountId, money)
  }

  public onPopMoney(): void {
    const money: number = Number(this.formGroup.controls['money'].value);
    this._bankService.popMoney(this.currentBankAccountId, money);
  }

  public onSelectBankAccount(bankAccountId: number): void {
    bankAccountId = Number(bankAccountId);
    this.currentBankAccount = this._bankService.getAccountById(bankAccountId);
    this.currentBankAccountId = bankAccountId;
  }
}
