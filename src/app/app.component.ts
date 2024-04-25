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
      text: 'Learn Angular',
      isComplete: false
    },
    {
      text: 'Learn TypeScript',
      isComplete: true
    },
    {
      text: 'Find Grass that Cuts Itself',
      isComplete: false
    }
  ];
  title = 'wishlist';
}
