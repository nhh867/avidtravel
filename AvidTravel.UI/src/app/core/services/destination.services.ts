import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination } from '../models/destination.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private apiUrl = `${environment.apiUrl}/destinations`;

  constructor(private http: HttpClient) {}

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.apiUrl);
  }
}
