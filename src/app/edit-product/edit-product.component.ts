import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductsService} from "../products.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId: string;
  editForm: FormGroup;
  product: Product;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      price: [0],
      description: [''],
      image: ['none'],
      count: [0]
    });
  }

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');
    this.product = await this.productsService.getProductById(productIdFromRoute)
    this.productId = productIdFromRoute;
    this.populateForm(this.product);
  }


  onSubmit(): void {
    // Update the product with the edited values
    const editedProduct: Product = {
      id: this.productId,
      name: this.editForm.value.name,
      price: +this.editForm.value.price,
      description: this.editForm.value.description,
      image: this.editForm.value.image,
      count: this.editForm.value.count
    };


    this.productsService.updateProduct(this.productId, editedProduct).then(() => {
      this.message = 'Product updated successfully!';
    }).catch((error) => {
      this.message = 'Error updating product: ' + error;
    })
  }

  populateForm(product: Product): void {
    this.editForm.patchValue({
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      count: product.count
    });
  }


}
