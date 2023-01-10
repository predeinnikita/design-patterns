import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestChildRoutingModule } from './test-child-routing.module';
import { TestChildComponent } from './test-child/test-child.component';


@NgModule({
  declarations: [
    TestChildComponent
  ],
  imports: [
    CommonModule,
    TestChildRoutingModule
  ]
})
export class TestChildModule { }
