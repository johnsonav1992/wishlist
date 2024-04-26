import { Component, Input } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';

@Component({
  selector: 'wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  @Input() items!: WishItem[];

  toggleItem (item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
