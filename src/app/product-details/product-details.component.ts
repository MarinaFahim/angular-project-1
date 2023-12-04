import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// import {Product, products} from '../products';
import {CartService} from '../cart.service';
import {Product, ProductsService} from '../products.service';

@Component({
  selector: 'app-product-details',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  similarProducts: Product[] = [];

  constructor(private route: ActivatedRoute, private cartService: CartService, private productsService: ProductsService) {

  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    // window.alert('Your product has been added to the cart!');
  }


  deleteProduct() {
    this.productsService.deleteProduct(this.product?.id)
    window.location.href = '/';
  }

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');
    const products = await this.productsService.getProducts()
    this.product = products.find(product => product.id === productIdFromRoute);
    this.similarProducts = await this.productsService.getSimilarProducts(this.product.id)
  }
}
