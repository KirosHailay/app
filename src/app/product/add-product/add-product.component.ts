import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
//import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
    loading = false;
    submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService : ProductService) { }


    ngOnInit() {
      this.addProductForm = this.formBuilder.group({
          title: ['', Validators.required],
          imageUrl: ['', Validators.required],
          quantity: ['', Validators.required],
          price: ['', [Validators.required]],
          description : ['', [Validators.required]]
      });
  }

  get f() { return this.addProductForm.controls; }

  addProduct() {
        this.submitted = true;
        this.productService
        .addProduct(this.addProductForm.value)
        .subscribe(data => {
            this.loading = false;
            
            this.router.navigate(['seller' , 'display-products']);
        },
        error => {
            this.loading = false;
        });
    }

}