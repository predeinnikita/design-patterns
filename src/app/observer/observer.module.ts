import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverRoutingModule } from './observer-routing.module';
import { ObserverComponent } from './components/observer/observer.component';
import { ObservableEventsService } from './services/observable-events.service';

@NgModule({
  declarations: [
    ObserverComponent
  ],
  imports: [
    CommonModule,
    ObserverRoutingModule,
  ],
  providers: [
    ObservableEventsService,
  ]
})
export class ObserverModule { }
