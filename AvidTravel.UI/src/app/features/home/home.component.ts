import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../../core/services/destination.services';
import { Destination } from '../../core/models/destination.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, FormsModule, MultiSelectModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  destinations: Destination[] = [];
  selectedDestination: Destination[] = [];

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getDestinations()
      .subscribe(data => this.destinations = data);
  }
}
