import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  public formGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  public transports: ITransport[] = [];

  public onCreateTransport(transportType: transportType): void {
    const name = this.formGroup.controls['name'].value;
    const description = this.formGroup.controls['description'].value;
    const factory = this.getFactory(transportType, name, description);
    this.transports.push(factory.createTransport());
  }

  public onCleanTransports(): void {
    this.transports = [];
  }

  private getFactory(transportType: transportType, name: string, description: string): TransportFactory {
    switch (transportType)  {
      case 'car':
        return new CarFactory(name, description);
      case 'bicycle':
        return new BicycleFactory(name, description);
      case 'bike':
        return new BikeFactory(name, description);
    }
  }

}
