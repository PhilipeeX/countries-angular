import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryService} from '../../services/country.service';
import {CountryDetailsInterface} from '../../models/country-details.interface';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import * as countries from 'country-list';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  countryList = countries;
  countryName: string;
  countryDetails: CountryDetailsInterface;
  faArrowLeft = faArrowLeft;
  currencies = [];

  country: string;

  constructor(
    private route: ActivatedRoute,
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

  getBorderCountries(): string[] {
    if (!this.countryDetails || !this.countryDetails.borders) {
      return [];
    }

    return this.countryDetails.borders.map((border: string) => {
      // TODO: Tentei implementar dessa forma mas nao dá certo, é necessário usar alguma forma de obter o nome do país
      // através das 3 letras das abreviações e nao apenas 2, com 2 fica bugado, ex: observar o Brasil.
      const term = border.slice(0, 2);
      return this.countryList.getName(term);
    });
  }

}
