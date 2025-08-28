import { Destination } from "./destination.model";
import { Trip } from "./trip.model";

export interface TripSearchResult {
    Id: number;
    TripId: number;
    DestinationId: number;

    Trips: Trip;
    Destinations: Destination; 
    Sequence: number;
    StartDate: Date;        
    EndDate: Date;
    Cost: number;
     
}