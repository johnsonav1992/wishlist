import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { WishItem } from '../models/wishItem';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { 
    
  
  }
  private getStandardOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Client Error - ', error.error);
    } else {
      console.error('Server error - ', error.error)
    }

    return throwError(() => new Error('Cannot retrieve wishes from the server. Please try again.'))
  }

  getWishes() {
    let options = this.getStandardOptions();

    return this.http.get<WishItem[]>('assets/wishes.json').pipe(catchError(this.handleError))
  }

  private addWish(wish: WishItem) {
    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', 'yo man')

    return this.http.post<WishItem[]>('assets/wishes.json', wish, options)
  }
}
