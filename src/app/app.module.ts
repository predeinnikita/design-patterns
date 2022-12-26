import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactoryModule } from './factory/factory.module';
import { TestUserEndMonitoringModule } from './test-user-end-monitoring/test-user-end-monitoring.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FactoryModule,
    TestUserEndMonitoringModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
