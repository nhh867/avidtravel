import { NumberSymbol } from '@angular/common';
import { Destination } from './destination.model'

export class TripSearchRequest {

  destinations: number[] = [];
  startdate: string = '';

  constructor(destinations?: number[], startdate?: string) {
    destinations= destinations;
    startdate = startdate;
  }

}
