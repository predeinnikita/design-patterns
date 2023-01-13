import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrategyRoutingModule } from './strategy-routing.module';
import { StrategyComponent } from './components/strategy/strategy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FactoryRoutingModule } from '../factory/factory-routing.module';


@NgModule({
  declarations: [
    StrategyComponent
  ],
  imports: [
    CommonModule,
    StrategyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FactoryRoutingModule,
  ]
})
export class StrategyModule { }
