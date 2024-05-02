import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
    , ContactComponent
    , ReactiveFormsModule
  ]
  , exports: [ContactComponent]
})
export class ContactModule { }
