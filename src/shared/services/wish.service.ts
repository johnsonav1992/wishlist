import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WishItem } from '../models/wishItem';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { 

  }

  getWishes() {
    return this.http.get<WishItem[]>('assets/wishes.json')
  }
}
