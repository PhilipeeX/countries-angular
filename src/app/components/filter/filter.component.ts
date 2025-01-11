import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  searchTerm = '';
  @Output() filterChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSearchChange(): void {
    this.filterChanged.emit(this.searchTerm);
  }
}
