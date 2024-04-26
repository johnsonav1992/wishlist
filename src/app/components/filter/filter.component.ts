import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export class FilterComponent {
  @Output() filterWishes = new EventEmitter<string>();
  @Input() items: WishItem[] = [];

  listFilter: FilterOptions = 'all';

  changeFilter(value: FilterOptions) {
    let selection;

    switch(value) {
      case 'all': selection = this.items;
        break;
      case 'fulfilled': selection = this.items.filter(item => item.isComplete);
        break;
      case 'unfulfilled': selection = this.items.filter(item => !item.isComplete);
    }

    this.filterWishes.emit(selection)
  }
}
