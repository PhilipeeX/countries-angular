import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryDetailsComponent} from './components/country-details/country-details.component';
import {CountriesComponent} from './components/countries/countries.component';


const routes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'countries', component: CountriesComponent },
  { path: 'country/:name', component: CountryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
