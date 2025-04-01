import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryService} from '../../services/country.service';
import {CountryDetailsInterface} from '../../models/country-details.interface';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {countryTrigramMap} from '../../shared/constants/country-trigram-map';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  countryName: string;
  countryDetails: CountryDetailsInterface;
  faArrowLeft = faArrowLeft;
  currencies = [];
  country: string;
  countryTrigramMap = countryTrigramMap;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.countryName = params.name;
      this.loadCountryDetails();
    });
    this.getBorderCountries();
  }

  loadCountryDetails(): void {
    this.countryService.getCountryByName(this.countryName).subscribe(data => {
      this.countryDetails = data;
    });
  }

  getNativeName(): string {
    const langKeys = Object.keys(this.countryDetails.name.nativeName);
    const lastLangKey = langKeys[langKeys.length - 1];

    if (this.countryDetails.name.nativeName[lastLangKey]?.common) {
      return this.countryDetails.name.nativeName[lastLangKey].common;
    }
  }

  getCurrencies(): string {
    const currenciesKeys = Object.keys(this.countryDetails.currencies );

    for (const key of currenciesKeys) {
      if (this.countryDetails.currencies[key]) {
        this.currencies.push(this.countryDetails.currencies[key].name);
      } else {
        return 'N/A';
      }
    }
    return this.currencies.join(', ');
  }

  getLanguages(): string[] {
    return Object.values(this.countryDetails.languages);
  }

  getBorderCountries(): any[] {
    if (!this.countryDetails || !this.countryDetails.borders || this.countryDetails.borders.length === 0) {
      return [];
    }

    return this.countryDetails.borders.map(code =>
      this.countryTrigramMap[code]
    );
  }

  returnToCountries(): void{
    this.router.navigate(['/countries']);
  }
}
