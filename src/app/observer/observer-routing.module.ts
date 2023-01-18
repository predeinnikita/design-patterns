import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObserverComponent } from './components/observer/observer.component';

const routes: Routes = [
  { path: '', component: ObserverComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObserverRoutingModule { }
