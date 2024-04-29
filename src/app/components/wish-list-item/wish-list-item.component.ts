import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { EventService, events } from '../../../shared/services/eventService';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wish!: WishItem;
  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  constructor(private events: EventService) {}

  get cssClasses () {
    return { 'strikeout text-muted': this.fulfilled }
  }

  toggleFulfilled() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }

  removeWish() {
    this.events.emit('removeWish', this.wish.id)
  }
}
