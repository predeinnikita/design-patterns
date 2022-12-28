import { Injectable, isDevMode } from '@angular/core';
import { PerfKeeper } from '../utills/perf.types';
import { yandexAnalytics } from '../utills/yandex.perf';

declare const perfKeeper: any;

@Injectable({
  providedIn: 'root'
})
export class PerfMetricaService {

  private _keeper: PerfKeeper;

  constructor(
  ) {    
    this._keeper = perfKeeper.create({
      print: isDevMode(),    // DevTools -> Console
      timeline: true, // DevTools -> Performance -> User timings
      prefix: '⏱',
    });

    this.setYandexAnalitics();

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

  private setYandexAnalitics(): void {
    this._keeper.setAnalytics([
      yandexAnalytics({
        id: '91793814',
        prefix: '',
        normalize: (names: string[]) => names
      })
    ]);
  }
}


