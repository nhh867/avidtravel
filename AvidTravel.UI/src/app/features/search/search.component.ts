import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destination } from '../../core/models/destination.model';
import { DestinationService } from '../../core/services/destination.services';
import { TripSearchRequest } from '../../core/models/trip-search-request.model';
import { TripSearchResult } from '../../core/models/trip-search-result.model';
import { TripService } from '../../core/services/trip.services';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { SHARED_IMPORTS } from '../../shared/shared-imports';

@Component({
  selector: 'app-search-component',
  imports: [ SHARED_IMPORTS, CommonModule],
  templateUrl: './search.component.html',
  standalone: true,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  keywords: string[] = [];
  date: string = '';
  destinations: Destination[] = [];
  tripsearch: TripSearchRequest = new TripSearchRequest();
  public trips: any[] = [];
    
  isLoading = true;

  constructor(private route: ActivatedRoute, private destinationService: DestinationService, private tripService: TripService) {}

  ngOnInit(): void {

    this.destinationService.getDestinations().subscribe(data => this.destinations = data);

    this.route.queryParams.subscribe(params => {

      this.keywords = params['keywords'];
      this.date = params['date'] || '';

      this.onFind();
    });
  }

  onFind(): void {

    //find the matching destination ids
    this.tripsearch.destinations = this.keywords.reduce<number[]>((ids, kw) => {
      const match = this.destinations.find(d => d.name === kw.trim());
        if (match) {
          ids.push(match.id);
        }
        return ids;
    }, []);

    this.tripsearch.startdate = this.date;

    this.tripService.searchTrips(this.tripsearch)
      .subscribe((data: any[]) => {
        console.log("data:", data);
        this.trips = data;
        this.isLoading = false;
       
     });

  }

}
