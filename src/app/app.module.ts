import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { CountryCardComponent } from './components/countries/country-card/country-card.component';
import { FilterComponent } from './components/countries/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { CountriesComponent } from './components/countries/countries.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountryCardComponent,
    FilterComponent,
    CountryDetailsComponent,
    CountriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
