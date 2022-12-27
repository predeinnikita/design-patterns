import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FacadeComponent } from './facade/components/facade/facade.component';
import { FactoryComponent } from './factory/components/factory/factory.component';
import { PerfMetricaService } from './shared/services/perf-metrica.service';
import { YandexAnalyticsService } from './shared/services/yandex-analynics.service';
import { TestUserEndComponent } from './test-user-end-monitoring/test-user-end/test-user-end.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design-patterns';

  constructor(
    private router: Router,
    private perfKeeper: PerfMetricaService,
    private yandesMetrica: YandexAnalyticsService,
  ) {
    // this.router.resetConfig(routes);
    // this.perfKeeper.group('group1');
    // this.perfKeeper.time('time1');
    // setTimeout(() => {
    //   this.perfKeeper.endTime('time1');
    //   this.perfKeeper.endGroup('group1');
    // }, 5000);

    // this.yandesMetrica.emitEvent('fibonacci');
  }

  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  public onActivate(component: Component): void {
    switch (true) {
      case component instanceof FactoryComponent:
        console.log('Factory');
        break;
      case component instanceof FacadeComponent:
        console.log('Facade');
        break;
      case component instanceof TestUserEndComponent:
        console.log('test');
        break;
    }
  }
}
