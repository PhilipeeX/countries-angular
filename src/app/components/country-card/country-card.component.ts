import {Component, Input, OnInit} from '@angular/core';
import {CountrySummaryInterface} from '../../models/country-summary.interface';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {

  @Input() country: CountrySummaryInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
