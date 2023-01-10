import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'factory',
        loadChildren: () => import('./factory/factory.module').then(m => m.FactoryModule),
      },
      {
        path: 'facade',
        loadChildren: () => import('./facade/facade.module').then(m => m.FacadeModule),
      },
      {
        path: 'test',
        loadChildren: () => import('./test-user-end-monitoring/test-user-end-monitoring-routing.module').then(m => m.TestUserEndMonitoringRoutingModule),
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
