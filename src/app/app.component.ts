import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishModule } from './wish/wish.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
    , WishModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
