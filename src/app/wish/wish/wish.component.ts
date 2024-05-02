import { Component } from '@angular/core';
import { WishItem } from '../models/wishItem';
import { FilterOptions } from '../../../shared/types/types';
import { EventService } from '../../../shared/services/eventService';
import { WishService } from '../services/wish.service';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';
import { InputFormComponent } from '../../components/input-form/input-form.component';
import { FilterComponent } from '../filter/filter.component';
import { WishlistComponent } from '../wishlist/wishlist.component';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [
    WishListItemComponent
    , InputFormComponent
    , FilterComponent
    , WishlistComponent
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {
  items: WishItem[] = [];

  filter?: FilterOptions;

  constructor(private events: EventService, private wishService: WishService) {
    this.events.listen('removeWish', (wishId: number) => {
      this.items = this.items?.filter(item => item.id !== wishId);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe({
      next: wishes => this.items = wishes
      , error: err => {}
    })
  }

  get visibleItems() {
    let value = this.filter;

    switch(value) {
      default:
      case 'all': return this.items;
      case 'fulfilled': return this.items?.filter(item => item.isComplete);
      case 'unfulfilled': return this.items?.filter(item => !item.isComplete);
    }
  }
}
