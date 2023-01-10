import { Injectable, isDevMode } from '@angular/core';
import { navigationTimings } from './utils/perf-keeper/perfKeeperNavigation/perf-navigation';
import { memoryStats } from './utils/perf-keeper/perfMemory/perf-memory-stats';
import { create, PerfKeeper } from './utils/perf-keeper/perfMetrica/keeper';
import { yandexAnalytics } from './utils/perf-keeper/perfMetrica/yandex.perf';

@Injectable()
export class PerfomanceMetricaService {

  private _keeper: PerfKeeper = create({
    print: isDevMode(),
    timeline: true,
    prefix: '⏱',
  });;

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

  public memoryStats(): void {
    memoryStats(this._keeper);
  }

  public setYandexAnalitics(id: string): void {
    this._keeper.setAnalytics([
      yandexAnalytics({
        id,
        prefix: '',
        normalize: (names: string[]) => names
      })
    ]);
  }
}
