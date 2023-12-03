import {HttpClient} from '@angular/common/http';

import {Injectable} from '@angular/core';
import {Product} from "./products";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  private readonly STORAGE_KEY = 'cart_items';


  constructor(private http: HttpClient) {
    this.loadCartItems();
  }

  addToCart(product: Product) {
    this.items.push(product);
    this.saveCartItems();

  }

  getItems() {
    console.log("The cart items are: ", this.items);
    return this.items;
  }


  clearCart() {
    this.items = [];
    this.saveCartItems();
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }

  getCount() {
    return this.items.length;
  }

  getTotal() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }

  private loadCartItems() {
    const storedItems = localStorage.getItem(this.STORAGE_KEY);
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  private saveCartItems() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
  }

}
