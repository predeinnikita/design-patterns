import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestUserEndComponent } from './test-user-end/test-user-end.component';

const routes: Routes = [
  {
    path: '', component: TestUserEndComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestUserEndMonitoringRoutingModule { }
