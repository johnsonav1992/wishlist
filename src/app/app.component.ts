import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { FilterOptions } from '../shared/types/types';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { FilterComponent } from './components/filter/filter.component';

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

  filter = 'all';

  get visibleItems() {
    let value = this.listFilter;

    switch(value) {
      case 'all': return this.items;
      case 'fulfilled': return this.items.filter(item => item.isComplete);
      case 'unfulfilled': return this.items.filter(item => !item.isComplete);
    }
  }

}
