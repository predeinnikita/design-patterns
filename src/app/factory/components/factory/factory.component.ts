import { Component, OnInit } from '@angular/core';
import { BicycleFactory } from '../../factories/bicycle.factory';
import { BikeFactory } from '../../factories/bike.factory';
import { CarFactory } from '../../factories/car.factory';
import { TransportFactory } from '../../factories/transport.base.factory';
import { ITransport, transportType } from '../../interfaces/transport.interface';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent {

  public transport: ITransport | null = null;

  public createTransport(transportType: transportType): void {
    const factory = this.getFactory(transportType);
    this.transport = factory.createTransport();
  }

  private getFactory(transportType: transportType): TransportFactory {
    switch (transportType)  {
      case 'car':
        return new CarFactory('Toyota', 'Toyota description');
      case 'bicycle':
        return new BicycleFactory('Forward', 'Forward description');
      case 'bike':
        return new BikeFactory('Motobike', 'Motobike description');
    }
  }
  
}
