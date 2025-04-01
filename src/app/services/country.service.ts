import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountrySummaryInterface } from '../models/country-summary.interface';
import {CountryDetailsInterface} from '../models/country-details.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = '/api';
  private filters = '/all?fields=name,population,region,capital,flags';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<CountrySummaryInterface[]> {
    return this.http.get<CountrySummaryInterface[]>(`${this.apiUrl}${this.filters}`);
  }

  getCountryByName(name: string): Observable<CountryDetailsInterface> {
    return this.http.get<CountryDetailsInterface[]>(`${this.apiUrl}/name/${name}?fullText=true`)
      .pipe(
        map((response: CountryDetailsInterface[]) => response[0])
      );
  }
}
