import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { FilterOptions } from '../shared/types/types';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { FilterComponent } from './components/filter/filter.component';
import { EventService } from '../shared/services/eventService';
import { HttpClientModule } from '@angular/common/http';
import { WishService } from '../shared/services/wish.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
    , FormsModule
    , WishlistComponent
    , InputFormComponent
    , FilterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
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
