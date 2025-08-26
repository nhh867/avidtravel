import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DestinationService } from '../../core/services/destination.services';
import { Destination } from '../../core/models/destination.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, FormsModule, MultiSelectModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  destinations: Destination[] = [];

  selectedDestination: string = '';
  carouselImageUrls: string[] = [
    'assets/background.jpeg'
  ];
  currentSlideIndex: number = 0;
  private autoRotateIntervalId: any;

  constructor(private destinationService: DestinationService, private http: HttpClient) {}

  ngOnInit(): void {
    this.destinationService.getDestinations()
      .subscribe(data => this.destinations = data);

    this.loadSlidesManifest();
    this.startAutoRotate();
  }

  ngOnDestroy(): void {
    if (this.autoRotateIntervalId) {
      clearInterval(this.autoRotateIntervalId);
    }
  }

  onNextSlideClick(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.carouselImageUrls.length;
  }

  onPreviousSlideClick(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.carouselImageUrls.length) % this.carouselImageUrls.length;
  }

  onGoToSlideClick(targetIndex: number): void {
    if (targetIndex < 0 || targetIndex >= this.carouselImageUrls.length) {
      return;
    }
    this.currentSlideIndex = targetIndex;
  }

  private startAutoRotate(): void {
    if (this.carouselImageUrls.length <= 1) {
      return;
    }
    this.autoRotateIntervalId = setInterval(() => {
      this.onNextSlideClick();
    }, 5000);
  }

  private loadSlidesManifest(): void {
    this.http.get<string[]>('assets/slides.json')
      .subscribe({
        next: (urls) => {
          if (Array.isArray(urls) && urls.length > 0) {
            this.carouselImageUrls = urls.filter(u => typeof u === 'string' && u.trim().length > 0);
          }
        },
        error: () => {
          // Fallback to default hardcoded image; no action needed
        }
      });
  }
}
