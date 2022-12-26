import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestUserEndMonitoringRoutingModule } from './test-user-end-monitoring-routing.module';
import { TestUserEndComponent } from './test-user-end/test-user-end.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    TestUserEndComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TestUserEndMonitoringRoutingModule
  ]
})
export class TestUserEndMonitoringModule { }
