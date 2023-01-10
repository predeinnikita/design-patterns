import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestChildComponent } from './test-child/test-child.component';

const routes: Routes = [
  {
    path: '', component: TestChildComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestChildRoutingModule { }
