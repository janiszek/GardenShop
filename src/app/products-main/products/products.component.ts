import { Component, OnInit } from '@angular/core';
import { Article } from '../../Services/products';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Article[];

  constructor(private productService: ProductService) { 

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.productList = products;
      console.log(this.productList);
    });
  }

  deleteProductClick(productId: number) {
    this.productService.deleteProduct(productId);
  }

}
