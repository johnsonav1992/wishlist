import { Component, Input } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';

@Component({
  selector: 'wishlist',
  standalone: true,
  imports: [WishListItemComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  @Input() items!: WishItem[];
}
