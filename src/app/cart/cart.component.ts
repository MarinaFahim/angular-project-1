import {Component} from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();
  total = this.cartService.getTotal();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService: CartService, private formBuilder: FormBuilder, private productsService: ProductsService) {

  }

  clearCart = () => {
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
  }

  async onSubmit() {
    // Process checkout data here
    await this.productsService.checkout(this.items)
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();


  }

}