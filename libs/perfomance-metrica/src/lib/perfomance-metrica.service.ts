import { Inject, Injectable, isDevMode } from '@angular/core';
import { navigationTimings } from './utills/perfKeeperNavigation/perf-navigation';
import { memoryStats } from './utills/perfMemory/perf-memory-stats';
import { create, PerfKeeper } from './utills/perfMetrica/keeper';
import { yandexAnalytics } from './utills/perfMetrica/yandex.perf';

@Injectable({
  providedIn: 'root'
})
export class PerfomanceMetricaService {

  private _keeper: PerfKeeper;

  constructor(
    @Inject('yandexMetricaId') private yandexMetricaId: string,
  ) {    
    this._keeper = create({
      print: isDevMode(),    // DevTools -> Console
      timeline: true, // DevTools -> Performance -> User timings
      prefix: '⏱',
    });

    this.setYandexAnalitics(this.yandexMetricaId);
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

  private setYandexAnalitics(id: string): void {
    this._keeper.setAnalytics([
      yandexAnalytics({
        id,
        prefix: '',
        normalize: (names: string[]) => names
      })
    ]);
  }
}
