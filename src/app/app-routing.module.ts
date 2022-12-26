import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { LoadChildrenCallback, Router, RouterModule, ROUTES, Routes } from '@angular/router';
import { PerfMetricaService } from './services/perf-metrica.service';
import { FacadeModule } from './facade/facade.module'
import { FactoryModule } from './factory/factory.module'

const getRoutes = (loadCallback: any = (a: any) => a ) => {
  return [
    {
      path: '',
      children: [
        {
          path: 'factory',
          loadChildren: loadCallback(() => import('./factory/factory.module').then(m => m.FactoryModule)),
        },
        {
          path: 'facade',
          loadChildren: loadCallback(() => import('./facade/facade.module').then(m => m.FacadeModule)),
        },
        {
          path: 'test',
          loadChildren: loadCallback(() => import('./test-user-end-monitoring/test-user-end-monitoring-routing.module').then(m => m.TestUserEndMonitoringRoutingModule)),
        }
      ]
    }
  ];
}

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

const loadRoutes = (injector: Injector, perfMetrica: PerfMetricaService) => () => {

  const loadModule = (importFunc: () => Promise<any>) => { 
    return () => {
      console.log('начало');
      
      return importFunc().then((m) => {
        console.log('конец');

        return m;
      })
    }
  }


  const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'factory',
          loadChildren: loadModule(() => import('./factory/factory.module').then(m => m.FactoryModule)),
        },
        {
          path: 'facade',
          loadChildren: loadModule(() => import('./facade/facade.module').then(m => m.FacadeModule)),
        },
        {
          path: 'test',
          loadChildren: loadModule(() => import('./test-user-end-monitoring/test-user-end-monitoring-routing.module').then(m => m.TestUserEndMonitoringRoutingModule)),
        }
      ]
    }
  ]

  const router: Router = injector.get(Router);
  router.resetConfig(routes);
};


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadRoutes,
      deps: [Injector, PerfMetricaService],
      multi: true,
    },
  ],
})
export class AppRoutingModule {
}
