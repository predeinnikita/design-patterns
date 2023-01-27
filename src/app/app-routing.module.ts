import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'factory', loadChildren: () => import('./factory/factory.module').then(m => m.FactoryModule),
      },
      {
        path: 'facade', loadChildren: () => import('./facade/facade.module').then(m => m.FacadeModule),
      },
      {
        path: 'strategy', loadChildren: () => import('./strategy/strategy.module').then(m => m.StrategyModule),
      },
      {
        path: 'observer', loadChildren: () => import('./observer/observer.module').then(m => m.ObserverModule),
      },
      {
        path: 'adapter', loadChildren: () => import('./adapter/adapter.module').then(m => m.AdapterModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
