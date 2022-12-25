import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfMetricaService } from './services/perf-metrica.service';
import { YandexAnalyticsService } from './services/yandex-analynics.service';

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
    this.perfKeeper.group('group1');
    this.perfKeeper.time('time1');
    setTimeout(() => {
      this.perfKeeper.endTime('time1');
      this.perfKeeper.endGroup('group1');
    }, 5000);

    this.yandesMetrica.emitEvent('fibonacci');
  }

  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
