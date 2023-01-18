import { Injectable } from '@angular/core';
import { CustomSubject } from '../utils/subject';

@Injectable()
export class ObservableEventsService {

  public events$: CustomSubject<number>;

  constructor() { 
    this.events$ = new CustomSubject<number>();
    let timeInSeconds: number = 0;

    setInterval(() => {
      timeInSeconds += 1;
      this.events$.next(timeInSeconds);
    }, 1000)
  }
}