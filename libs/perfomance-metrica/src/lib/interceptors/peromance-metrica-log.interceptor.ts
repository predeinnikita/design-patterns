import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { PerfomanceMetricaService } from '../perfomance-metrica.service';

@Injectable()
export class PerfomanceMetricaLogInterceptor implements HttpInterceptor {

  constructor(
    private _perfMetrica: PerfomanceMetricaService,
  ) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._perfMetrica.group('Время выполнения запроса');
    this._perfMetrica.time(request.url);

    return next.handle(request).pipe(
      finalize(() => {
        this._perfMetrica.endGroup('Время выполнения запроса');
        this._perfMetrica.endTime(request.url);
      })
    );
  }
}
