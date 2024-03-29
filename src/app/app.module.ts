import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactoryModule } from './factory/factory.module';
import { ObserverModule } from './observer/observer.module';
import { AdapterModule } from "./adapter/adapter.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FactoryModule,
    ObserverModule,
    AdapterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
