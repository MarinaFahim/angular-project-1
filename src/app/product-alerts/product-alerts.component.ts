// import {Product} from '../products';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";
import {Product, ProductsService} from "../products.service";

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
