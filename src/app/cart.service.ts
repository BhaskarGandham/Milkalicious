import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  addToCart(item: CartItem) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = [...currentItems, item];
    this.cartItemsSubject.next(updatedItems);
  }
}