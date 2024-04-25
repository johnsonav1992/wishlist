import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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

  title = 'wishlist';

  toggleItem (item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(this.items)
  }
}
