import { Injectable } from '@angular/core';
import { PerfKeeper } from '../perf.types';
import { yandexAnalytics } from '../yandex.perf';
import { YandexAnalyticsService } from './yandex-analynics.service';

declare const perfKeeper: any;
declare const perfKeeperAnalyticsYandex: any;
declare const ym: any;

@Injectable({
  providedIn: 'root'
})
export class PerfMetricaService {

  private _keeper: PerfKeeper;

  constructor(
    private yandexMetrica: YandexAnalyticsService
  ) {
    console.log(perfKeeperAnalyticsYandex.yandexAnalytics);
    
    this._keeper = perfKeeper.create({
      print: true,    // DevTools -> Console
      timeline: true, // DevTools -> Performance -> User timings
      prefix: '⏱',
    });

    this._keeper.setAnalytics([
      yandexAnalytics({
        id: this.yandexMetrica.id,
        prefix: 'my-app',
        normalize: (names: string[]) => names
      })
    ]);
  }

  public group(groupName: string): void {
    this._keeper.group(groupName);
  }

  public time(timeName: string): void {
    this._keeper.time(timeName)
  }

  public endTime(timeName: string): void {
    this._keeper.timeEnd(timeName);
  }

  public endGroup(groupName: string): void {
    this._keeper.groupEnd(groupName);
  }
}


