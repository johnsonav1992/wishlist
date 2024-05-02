import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterOptions } from '../../../shared/types/types';
import { WishItem } from '../../wish/models/wishItem';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {
  @Input() filter?: FilterOptions;
  @Output() filterChange = new EventEmitter<FilterOptions>();

  @Input() items: WishItem[] = [];

  listFilter: FilterOptions = 'all';

  ngOnInit(): void {
    this.updateFilter('all')
  }

  updateFilter(value: FilterOptions) {
    this.filter = value;
    this.filterChange.emit(value);
  }
}
