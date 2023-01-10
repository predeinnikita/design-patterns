import { Component, OnInit } from '@angular/core';
import { PerfomanceMetricaService } from 'perfomance-metrica';
import { first, interval, tap } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-test-user-end',
  templateUrl: './test-user-end.component.html',
  styleUrls: ['./test-user-end.component.scss']
})
export class TestUserEndComponent implements OnInit {
  public timeInSeconds: number = 0;

  constructor(
    private _perfKeeper: PerfomanceMetricaService,
    private _api: ApiService,
  ) {
    this._perfKeeper.group('Тестовое время рендера компонентов');
    this._perfKeeper.time('TestUserEndComponent');
  }

  public ngOnInit(): void {
    this._perfKeeper.endGroup('Тестовое время рендера компонентов');
    this._perfKeeper.endTime('TestUserEndComponent');
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
