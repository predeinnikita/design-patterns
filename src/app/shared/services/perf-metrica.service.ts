import { Injectable, isDevMode } from '@angular/core';
import { PerfKeeper } from '../utills/perfMetrica/perf.types';
import { yandexAnalytics } from '../utills/perfMetrica/yandex.perf';
import { navigationTimings } from '../utills/perfKeeperNavigation/perf-navigation';
import { memoryStats } from '../utills/perfMemory/perf-memory-stats';
import { create } from '../utills/perfMetrica/keeper';


@Injectable({
  providedIn: 'root'
})
export class PerfMetricaService {

  private _keeper: PerfKeeper;

  constructor(
  ) {    
    this._keeper = create({
      print: isDevMode(),    // DevTools -> Console
      timeline: true, // DevTools -> Performance -> User timings
      prefix: '⏱',
    });

    this.setYandexAnalitics();
    this.memoryStats();
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

  public navigationTimings(): void {
    navigationTimings(this._keeper);
  }

  private memoryStats(): void {
    memoryStats(this._keeper);
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


