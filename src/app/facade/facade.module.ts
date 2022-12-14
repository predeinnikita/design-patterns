import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacadeRoutingModule } from './facade-routing.module';
import { FacadeComponent } from './components/facade/facade.component';
import { BankService } from './services/bank.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FacadeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FacadeRoutingModule
  ],
  providers:[
    BankService
  ]
})
export class FacadeModule { }
