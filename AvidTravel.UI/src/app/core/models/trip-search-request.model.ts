import { Destination } from './destination.model'

export class TripSearchRequest {

  destinations: Destination[] = [];
  startdate: string = '';

  constructor(destinations?: Destination[], startdate?: string) {
    destinations = destinations;
    startdate = startdate;
  }

}
