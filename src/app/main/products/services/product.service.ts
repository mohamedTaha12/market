import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }
  getAllProducts() {
    return this.http.get(environment.productsUrl + 'products');
  }
  getAllCategories() {
    return this.http.get(environment.productsUrl + 'products/categories');
  }
  getProductsByCategory(category: string) {
    return this.http.get(environment.productsUrl + 'products/category/' + category)
  }
}
