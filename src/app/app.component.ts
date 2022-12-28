import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfMetricaService } from './shared/services/perf-metrica.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design-patterns';

  constructor(
    private router: Router,
    private _perfKeeper: PerfMetricaService
  ) {
    this._perfKeeper.navigationTimings();
  }

  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
