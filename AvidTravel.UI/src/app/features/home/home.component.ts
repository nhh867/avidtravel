import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DestinationService } from '../../core/services/destination.services';
import { Destination } from '../../core/models/destination.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';


@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, FormsModule, MultiSelectModule, GalleriaModule, ButtonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit{
  destinations: Destination[] = [];

  selectedDestination: string = '';

  images: Array<{ itemImageSrc: string; thumbnailImageSrc: string; alt?: string; title?: string }> = [];
  activeIndex: number = 0;
  showThumbnails: boolean = true;
  isAutoPlay: boolean = true;
  fullscreen: boolean = false;

  constructor(private destinationService: DestinationService, private http: HttpClient) {}

  ngOnInit(): void {
    this.destinationService.getDestinations()
      .subscribe(data => this.destinations = data);


    this.http.get<Array<{ itemImageSrc: string; thumbnailImageSrc: string; alt?: string; title?: string }>>('/slides.json')
      .subscribe(data => this.images = data);
  }

  galleriaClass(): string {
    return this.fullscreen ? 'w-full h-full' : 'w-full';
  }

  slideButtonIcon(): string {
    return this.isAutoPlay ? 'pi pi-pause' : 'pi pi-play';
  }

  fullScreenIcon(): string {
    return this.fullscreen ? 'pi pi-window-minimize' : 'pi pi-window-maximize';
  }

  toggleAutoSlide(): void {
    this.isAutoPlay = !this.isAutoPlay;
  }

  toggleFullScreen(): void {
    this.fullscreen = !this.fullscreen;
  }

  onThumbnailButtonClick(): void {
    this.showThumbnails = !this.showThumbnails;
  }
}
