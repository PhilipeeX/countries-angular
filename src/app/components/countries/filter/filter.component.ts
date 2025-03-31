import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  searchTerm = '';

  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic'];
  selectedRegion = '';
  isOptionsVisible = false;

  @Output() filterChanged = new EventEmitter<{ searchTerm: string, selectedRegion: string }>();

  constructor() {}

  ngOnInit(): void {}

  onFilterChange(): void {
    this.filterChanged.emit({
      searchTerm: this.searchTerm,
      selectedRegion: this.selectedRegion
    });
  }

  onSelectClick() {
    this.isOptionsVisible = !this.isOptionsVisible;
  }

  onOptionSelect(region: string) {
    this.selectedRegion = region;
    this.filterChanged.emit({
      searchTerm: this.searchTerm,
      selectedRegion: this.selectedRegion
    });
    this.isOptionsVisible = !this.isOptionsVisible;
    this.onSelectClick();
  }
}
