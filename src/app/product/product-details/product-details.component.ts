import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product : Product;
id: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute ,
    private productService: ProductService) { 
      route.params.subscribe( params => { this.id = params['id']});
    this.productService.getProduct(this.id).pipe(first()).subscribe(data =>{ 
      console.log("status.....", data.status)
     this.product = data.result;
    })
  }

  ngOnInit(): void {
  }

}
