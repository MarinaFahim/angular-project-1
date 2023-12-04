import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";
import {ProductsService} from "../products.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  checkoutForm = this.formBuilder.group({
    name: '',
    price: 0,
    description: '',
    image: 'none',
    count: 0
  })

  constructor(private route: ActivatedRoute, private cartService: CartService, private productsService: ProductsService, private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.productsService.addProduct({
      name: this.checkoutForm.value.name,
      price: +this.checkoutForm.value.price,
      description: this.checkoutForm.value.description,
      image: this.checkoutForm.value.image,
      count: this.checkoutForm.value.count,
    })
    this.checkoutForm.reset();
    // redirect back to home page.
    window.location.href = '/';
  }
}
