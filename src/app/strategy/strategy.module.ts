import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrategyRoutingModule } from './strategy-routing.module';
import { StrategyComponent } from './components/strategy/strategy.component';


@NgModule({
  declarations: [
    StrategyComponent
  ],
  imports: [
    CommonModule,
    StrategyRoutingModule
  ]
})
export class StrategyModule { }
