import {Component, OnInit} from '@angular/core';
import {CountrySummaryInterface} from './models/country-summary.interface';
import {CountryService} from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'countries-angular';
  countries: CountrySummaryInterface[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data: CountrySummaryInterface[]) => {
      this.countries = data;
    });
  }
}
