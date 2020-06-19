import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  updaterForm: FormGroup;
  loading = false;
  submitted = false;
  id: any;
  product : Product;

constructor(
  private formBuilder: FormBuilder,
  private router: Router,
  private route: ActivatedRoute ,
  private productService: ProductService) { 

    route.params.subscribe( params => { this.id = params['id']});
    this.productService.getProduct(this.id).pipe(first()).subscribe(data =>{ 
      console.log("status.....", data.status)
     this.product = data.result;
     console.log('image url ', this.product)

     this.updaterForm = this.formBuilder.group({
      id:[this.product._id, Validators.required],
      title: [this.product.title, Validators.required],
      imageURL: [this.product.imageURL, Validators.required],
      quantity: [this.product.quantity, Validators.required],
      price: [this.product.price, [Validators.required]],
      description : [this.product.description, [Validators.required]]
  });
  
    })
 


  }

  ngOnInit() {
  

}

get f() { return this.updaterForm.controls; }

 
updateProduct() {
  console.log("update form +"+this.updaterForm.value)
  this.submitted = true;
        this.productService
        .updateProduct(this.updaterForm.value)
        .pipe(first())
        .subscribe(data => {
            this.loading = false;
            console.log(data)
            this.router.navigate(['seller' , 'display-products']);
        },
        error => {
            this.loading = false;
        });

    
  }

}
