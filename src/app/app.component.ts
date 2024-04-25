import { Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { FilterOptions } from '../shared/types/types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[] = [
    {
      id: 1,
      text: 'Learn Angular',
      isComplete: false
    },
    {
      id: 2,
      text: 'Learn TypeScript',
      isComplete: true
    },
    {
      id: 3,
      text: 'Find Grass that Cuts Itself',
      isComplete: false
    }
  ];

  get visibleItems() {
    let value = this.listFilter;

    switch(value) {
      case 'all': return this.items;
      case 'fulfilled': return this.items.filter(item => item.isComplete);
      case 'unfulfilled': return this.items.filter(item => !item.isComplete);
    }
  }

  title = 'wishlist';
  newWishText = '';
  listFilter: FilterOptions = 'all';

  addNewWish () {
    this.items.push({
      id: this.items.length + 1,
      text: this.newWishText,
      isComplete: false
    });

    this.newWishText = ''
  }

  toggleItem (item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
