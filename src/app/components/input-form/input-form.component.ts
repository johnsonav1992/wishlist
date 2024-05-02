import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../../wish/models/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();
  newWishText = '';

  addNewWish () {
    this.addWish.emit({
      id: Math.random(),
      text: this.newWishText,
      isComplete: false
    })

    this.newWishText = ''
  }

}
