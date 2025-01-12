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
  searchTerm = '';
  selectedRegion = '';

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data: CountrySummaryInterface[]) => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  onFilterChanged(filters: { searchTerm: string, selectedRegion: string }): void {
    this.searchTerm = filters.searchTerm;
    this.selectedRegion = filters.selectedRegion;
    this.filterCountries();
  }

  filterCountries(): void {
    this.filteredCountries = this.countries.filter(country => {
      const matchesSearchTerm = country.name.common.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesRegion = this.selectedRegion ? country.region === this.selectedRegion : true;
      return matchesSearchTerm && matchesRegion;
    });
  }
}
