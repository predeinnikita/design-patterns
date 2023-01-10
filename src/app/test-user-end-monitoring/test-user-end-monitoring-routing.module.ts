import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestUserEndComponent } from './test-user-end/test-user-end.component';

const routes: Routes = [
  {
    path: '', component: TestUserEndComponent,
    children: [
      {
        path: 'test-child',
        loadChildren: () => import('./test-child/test-child.module').then(m => m.TestChildModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestUserEndMonitoringRoutingModule { 
}
