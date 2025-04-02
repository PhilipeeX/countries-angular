import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CountrySummaryInterface} from '../../models/country-summary.interface';
import {CountryService} from '../../services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries: CountrySummaryInterface[] = [];
  filteredCountries: CountrySummaryInterface[] = [];
  searchTerm = '';
  selectedRegion = '';
  displayedCount = 8;

  constructor(private router: Router, private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data: CountrySummaryInterface[]) => {
      this.countries = data;
      this.filteredCountries = this.countries.slice(0, this.displayedCount);
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

  redirectToCountry(name: string) {
    this.router.navigate([`/country/${name}`]);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      this.loadMoreCountries();
    }
  }

  loadMoreCountries(): void {
    if (this.displayedCount < this.countries.length) {
      this.displayedCount += 8;
      this.filteredCountries = this.countries.slice(0, this.displayedCount);
    }
  }
}
