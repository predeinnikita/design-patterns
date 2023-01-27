import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdapterComponent } from "./components/adapter/adapter.component";

const routes: Routes = [
  { path: '', component: AdapterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdapterRoutingModule { }
