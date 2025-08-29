import { NumberSymbol } from '@angular/common';
import { Destination } from './destination.model'

export class TripSearchRequest {

  destinationsId: number[] = [];
  startdate: string = '';

  constructor(destinationsId?: number[], startdate?: string) {
    destinationsId = destinationsId;
    startdate = startdate;
  }

}
