import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterOptions } from '../../../shared/types/types';
import { WishItem } from '../../../shared/models/wishItem';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {
  @Output() filterWishes = new EventEmitter<FilterOptions>();
  @Input() items: WishItem[] = [];

  listFilter: FilterOptions = 'all';

  ngOnInit(): void {
    this.filterWishes.emit('all')
  }

  changeFilter(value: FilterOptions) {
    this.filterWishes.emit(value)
  }
}
