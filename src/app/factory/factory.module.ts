import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryRoutingModule } from './factory-routing.module';
import { FactoryComponent } from './components/factory/factory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FactoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FactoryRoutingModule,
  ]
})
export class FactoryModule { }
