import { Component, OnInit } from '@angular/core';
import { ProductVM } from 'src/app/core/models/product-vm';
import { ProductService } from '../services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  categories: any[] = [];
  products!: any[];
  productsByCat: any[] = []
  value1!: number;
  value: string | undefined;

  value2: string | undefined;

  constructor(
    private productService: ProductService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.getAllProduct()
    this.getAllCategories()
  }
  getAllProduct() {
    this.productService.getAllProducts().subscribe((res: any) => {
      this.products = res
      console.log(res)
    })
  }
  getAllCategories() {
    this.productService.getAllCategories().subscribe((res: any) => {
      this.categories = res
    })
  }
  filterProductsByCategory(event: any) {
    let value = event.value;
    (value == "all") ? this.getAllProduct() : this.getProductsCategory(value)
  }
  getProductsCategory(category: string) {
    this.productService.getProductsByCategory(category).subscribe((data: any) => {
      this.products = data
    })
  }


}
