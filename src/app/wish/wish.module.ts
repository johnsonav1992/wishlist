import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { InputFormComponent } from '../components/input-form/input-form.component';
import { FilterComponent } from './filter/filter.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WishComponent } from './wish/wish.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
    , WishlistComponent
    , InputFormComponent
    , FilterComponent
    , HttpClientModule
    , FormsModule
    , WishComponent
  ]
  , exports: [
    WishComponent
  ]
})
export class WishModule { }
