import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../../core/services/destination.services';
import { Destination } from '../../core/models/destination.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  destinations: Destination[] = [];
  selectedDestination: string = '';

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getDestinations()
      .subscribe(data => this.destinations = data);
  }
}
