import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";
import {Product, ProductsService} from "../products.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [] as Product[]

  constructor(private route: ActivatedRoute, private cartService: CartService, private productsService: ProductsService) {
  }
  
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  async ngOnInit() {
    try {
      const allProducts = await this.productsService.getProducts();
      const cartItems = this.cartService.getItems();

      const counts = cartItems.reduce((a, {id}) => (
        Object.assign(a, {[id]: (a[id] || 0) + 1})
      ), {})

      this.products = allProducts.map(product => ({
        ...product,
        count: product.count - (counts[product.id] || 0)
      }));
      console.log("Products in the context: ", this.products);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  }
}