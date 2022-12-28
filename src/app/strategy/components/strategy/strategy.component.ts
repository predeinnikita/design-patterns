import { Component } from '@angular/core';
import { FibonacciGenerator } from '../../models/fibonacci-generator';
import { RecursiveFibonacciStrategy } from '../../strategies/fibonacci-recursive.strategy';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent {
  constructor() {
    const fibonacciGenerator: FibonacciGenerator = new FibonacciGenerator(
      new RecursiveFibonacciStrategy()
    );

    console.log(fibonacciGenerator.generateSequence(5));
  }
}
