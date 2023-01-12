import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactoryModule } from './factory/factory.module';
import { ApiService } from './shared/services/api.service';
import { TestUserEndMonitoringModule } from './test-user-end-monitoring/test-user-end-monitoring.module';
import { HttpClientModule } from '@angular/common/http';
import { 
  getYandexPerfomanceMetricaProvider, 
  LOG_HTTP_REQUESTS_TIME_PROVIDER, 
  LOG_LAZY_IMPORT_PROVIDER, 
  PerfomanceMetricaService
} from 'perfomance-metrica';
import { TestChildModule } from './test-user-end-monitoring/test-child/test-child.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FactoryModule,
    TestUserEndMonitoringModule,
    TestChildModule,
  ],
  providers: [
    ApiService,
    //Сервис для кастомного логирования времени
    PerfomanceMetricaService,
    //Подключение яндекс метрики для сбора статистики
    getYandexPerfomanceMetricaProvider('91793814'),
    //Логирование времени выполнения http-запросов
    LOG_HTTP_REQUESTS_TIME_PROVIDER,
    //Логирование времени загрузки ленивых модулей
    LOG_LAZY_IMPORT_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private perfomanceMetricaService: PerfomanceMetricaService) {
    //Статистика потребляемой памяти
    this.perfomanceMetricaService.memoryStats();
    //Cтастистика полного цикла от начала загрузки и до конца
    this.perfomanceMetricaService.navigationTimings();
  }
} 