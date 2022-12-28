import { TmplAstBoundAttribute } from '@angular/compiler';
import { Component } from '@angular/core';
import { first, interval, tap, timeout } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { PerfMetricaService } from 'src/app/shared/services/perf-metrica.service';

@Component({
  selector: 'app-test-user-end',
  templateUrl: './test-user-end.component.html',
  styleUrls: ['./test-user-end.component.scss']
})
export class TestUserEndComponent {
  public timeInSeconds: number = 0;

  constructor(
    private _perfKeeper: PerfMetricaService,
    private _api: ApiService,
  ) {
  }

  public onClick(): void {
    console.log('Старт');
    this._perfKeeper.time('Время работы метода');

    interval(this.timeInSeconds * 1000).pipe(
      first(),
      tap(() => {
        this._perfKeeper.endTime('Время работы метода');
      })
    ).subscribe()
  }

  public onGetPosts(): void {
    this._api.getPosts().subscribe(x => {
      console.log(x);
    })
  }
}
