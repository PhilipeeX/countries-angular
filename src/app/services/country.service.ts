import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountrySummaryInterface } from '../models/country-summary.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,population,region,capital';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<CountrySummaryInterface[]> {
    return this.http.get<CountrySummaryInterface[]>(this.apiUrl);
  }
}
