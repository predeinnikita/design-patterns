import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdapterRoutingModule } from './adapter-routing.module';
import { AdapterComponent } from './components/adapter/adapter.component';


@NgModule({
  declarations: [
    AdapterComponent
  ],
  imports: [
    CommonModule,
    AdapterRoutingModule
  ]
})
export class AdapterModule { }
