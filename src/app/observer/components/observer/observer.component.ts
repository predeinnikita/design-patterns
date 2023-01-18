import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomSubscription } from '../../utils/subject';
import { ObservableEventsService } from '../../services/observable-events.service';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss']
})
export class ObserverComponent implements OnInit, OnDestroy {
  public message: string = '';
  private subscription!: CustomSubscription<number>;

  constructor(
    private _observableEventsService: ObservableEventsService,
  ) {
  }
  
  ngOnInit(): void {
    this.subscription = this._observableEventsService.events$.subscribe((timeInSeconds: number) => {
      this.message = `Прошло ${timeInSeconds} сек.`;
    });
  }

  ngOnDestroy(): void {
    this._observableEventsService.events$.unsubscribe(this.subscription);
  }
}
