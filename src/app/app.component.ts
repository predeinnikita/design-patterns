import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PerfomanceMetricaService } from 'perfomance-metrica';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design-patterns';

  constructor(
    private router: Router,
  ) {
  }

  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
