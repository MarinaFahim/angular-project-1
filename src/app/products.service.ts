import {Injectable} from '@angular/core';

export interface Product {
  id?: string;
  name: string;
  price: number;
  description: string;
  image?: string;
  count?: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  api = "http://localhost:3000"
  products = [] as Product[];

  constructor() {
    this.getProducts()
      .then(products => {
        this.products = products
        console.log("Products in the cont: ", products)
      });
  }

  getProducts = async () => {
    const products = await (await fetch(`${this.api}/products`)).json() as Product[];
    return products
  }

  getProductById = async (productId: string) => await (await fetch(`${this.api}/products/${productId}`)).json() as Product;
  getSimilarProducts = async (productId: string) => await (await fetch(`${this.api}/products/${productId}/similar`)).json() as Product[];

  addProduct = async (product: Product) => {
    const response = await fetch(`${this.api}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
    const newProduct = await response.json();
    this.products.push(newProduct);
    return newProduct;
  }


  deleteProduct = async (productId: string) => {
    // /products/:id
    const deleted = await (await fetch(`${this.api}/products/${productId}`, {
      method: 'delete'
    })).json();
    console.log("deleted: ", deleted)
    this.products = this.products.filter(product => product.id !== productId);
    return this.products;  // Return the updated products array after deleting the product.
  }


  updateProduct = async (productId: string, updatedProduct: Product) => {
    const response = await fetch(`${this.api}/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    });
    const updated = await response.json();
    this.products = this.products.map(product => product.id === productId ? updated : product);
    return this.products;  // Return the updated products array after updating the product.
  }

  checkout = async (products: Product[]) => {
    const response = await fetch(`${this.api}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(products)
    });
    const data = await response.json();
    console.log("data: ", data)
    return data;  // Return the updated products array after updating the product.
  }

}

