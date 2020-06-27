import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Article } from '../../Services/products';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-addeditproduct',
  templateUrl: './addeditproduct.component.html',
  styleUrls: ['./addeditproduct.component.css']
})
export class AddeditproductComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  productId: number;
  product: Article = new Article(0, '', null, null, null);

  constructor(private router: Router, private route: ActivatedRoute, private location: Location,
              private productService: ProductService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // https://scotch.io/tutorials/javascript-unary-operators-simple-and-useful
      this.productId = +params.id;
      if (this.productId){
        this.product = this.productService.findById(this.productId);
      }
      console.log('this.product', this.product);
    });

  }

  goBackToPrevious() {
    this.location.back();
  }

  onSubmit(){
    /*console.log('submitted', this.product);
    console.log('form.value', this.form.value);
    console.log('form.valid', this.form.valid);
    console.log('form.dirty', this.form.dirty);
    console.log('form.touched', this.form.touched);*/

    // save changes only if edited
    if (this.form.valid && (this.form.dirty || this.form.touched)){
      if (this.product.id === 0){
        const product: Article = new Article(111, this.form.value.name, this.form.value.price, this.form.value.vat, this.form.value.amount);
        this.productService.addProduct(product);
      }
      else{
        // if the fields are disabled, they are not passed in this.form.value.
        this.productService.updateProduct(this.product.id,
          this.product.name, this.product.price, this.product.vat, this.form.value.amount);
      }
      this.router.navigate(['products']);
    }
  }
}
