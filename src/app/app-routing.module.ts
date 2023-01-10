import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LogGuard } from './shared/guards/log.guard';
import { PerfMetricaService } from './shared/services/perf-metrica.service';
import { getDecorateChildLazyImportFunction } from './shared/utills/decorate-child-lazy-import';
import { decorateAllChildRoutes } from './shared/utills/decorate-child-routes.utills';

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


const getRoutesFactoryFunction = (routes: Routes) => {
  const loadRoutes = (injector: Injector, perfMetrica: PerfMetricaService) => () => {
    const decorateChildLazyImportFunction = getDecorateChildLazyImportFunction(perfMetrica); 
    const router: Router = injector.get(Router);
    router.resetConfig(decorateAllChildRoutes(routes, decorateChildLazyImportFunction));
  };

  return loadRoutes
}



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: getRoutesFactoryFunction(routes),
      deps: [Injector, PerfMetricaService],
      multi: true,
    },
    LogGuard
  ],
})
export class AppRoutingModule {
}
