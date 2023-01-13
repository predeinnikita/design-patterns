import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FibonacciGenerator } from '../../models/fibonacci-generator';
import { CycleFibonacciStrategy } from '../../strategies/fibonacci-cycle.strategy';
import { RecursiveFibonacciStrategy } from '../../strategies/fibonacci-recursive.strategy';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent {

  private recursiveFibonacciGenerator: FibonacciGenerator = new FibonacciGenerator(
    new RecursiveFibonacciStrategy()
  );;
  private cycleFibonacciGenerator: FibonacciGenerator = new FibonacciGenerator(
    new CycleFibonacciStrategy()
  );;

  public formGroup: FormGroup = new FormGroup({
    count: new FormControl(0, Validators.required)
  });

  public result: number[] = [];

  public onRecursiveCalculate(): void {
    this.result = this.recursiveFibonacciGenerator.generateSequence(this.formGroup.controls['count'].value)
  }

  public onCycleCalculate(): void {
    this.result = this.cycleFibonacciGenerator.generateSequence(this.formGroup.controls['count'].value)
  }
  
}