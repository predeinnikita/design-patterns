import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategyComponent } from './components/strategy/strategy.component';

const routes: Routes = [
  {
    path: '', component: StrategyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrategyRoutingModule { }
