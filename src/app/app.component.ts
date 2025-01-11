import { Component, OnInit } from '@angular/core';
import { CountrySummaryInterface } from './models/country-summary.interface';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'countries-angular';
  countries: CountrySummaryInterface[] = [];
  filteredCountries: CountrySummaryInterface[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data: CountrySummaryInterface[]) => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  onFilterChanged(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredCountries = this.countries;
    } else {
      this.filteredCountries = this.countries.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}
