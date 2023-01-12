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

  /**
   * Старт таймера группы
   * @param {string} groupName - Название группы
  */
  public group(groupName: string): void {
    this._keeper.group(groupName);
  }

  /**
   * Старт таймера
   * @param {string} timeName - Название таймера
  */
  public time(timeName: string): void {
    this._keeper.time(timeName)
  }

  /**
   * Стоп таймера
   * @param {string} timeName - Название таймера
  */
  public endTime(timeName: string): void {
    this._keeper.timeEnd(timeName);
  }

  /**
   * Стоп таймера группы
   * @param {string} groupName - Название группы
  */
  public endGroup(groupName: string): void {
    this._keeper.groupEnd(groupName);
  }

  /**
   * Собрать статистику полного цикла 
   * от начала загрузки страницы (резолв DNS, обработка запроса, HTTP Handshake)
   * до полной загрузки страницы(DomReady, OnLoad)
  */
  public navigationTimings(): void {
    navigationTimings(this._keeper);
  }

  /**
   * Собрать статистику потребляемой памяти
  */
  public memoryStats(): void {
    memoryStats(this._keeper);
  }

  /**
   * Подключить Яндекс.Метрику для сбора статистики
   * @param {string} id - id приложения в Яндекс.Метрике
  */
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
