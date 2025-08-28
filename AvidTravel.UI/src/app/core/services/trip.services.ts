import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TripSearchRequest } from '../models/trip-search-request.model';
import { TripSearchResult } from '../models/trip-search-result.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private apiUrl = `${environment.apiUrl}/trips/search`; 

  constructor(private http: HttpClient) {}

  searchTrips(request: TripSearchRequest): Observable<TripSearchResult[]> {
    return this.http.post<TripSearchResult[]>(this.apiUrl, request);
  }
}
