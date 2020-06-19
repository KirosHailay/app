import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  products : Product[];

  constructor(private router : Router , private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().pipe(first()).subscribe( data => {
      this.products = data.result;
      console.log('....all products')
    })
  }

  goDeleteProduct(prodId){
    console.log("this is id value"+prodId)
     this.productService.deleteProduct(prodId).pipe(first()).subscribe(data =>{ 
     this.router.navigate(['seller', 'display-products']);
     window.location.reload()
    })
    
  }
  goUpdateProduct(prodId){
    this.router.navigate(['seller', 'update-products',prodId]);
  }

  goDisplayProduct(prodId){
    this.router.navigate(['seller', 'detail',prodId]);
  }
}
