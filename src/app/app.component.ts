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
  items = [
    new WishItem("To Learn Angular")
    , new WishItem("To Get Get at Coding", true)
    , new WishItem("Find Grass that Cuts Itself")
  ];
  title = 'wishlist';
}
