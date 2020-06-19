import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { first } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  product : Product;
id: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute ,
    private productService: ProductService, private cartService: CartService) { 
      route.params.subscribe( params => { this.id = params['id']});
    this.productService.getProduct(this.id).pipe(first()).subscribe(data =>{ 
      console.log("status.....", data.status)
     this.product = data.result;
    })
  }

  ngOnInit(): void {
  }
  addToCart(prodId){
    this.cartService.addToCart(prodId)
    .subscribe(
      data => {
      console.log("IN COMP",data.result);
      window.alert("You have successfully added item to cart");
      this.cartService.getCart();
      })
  }

  
}
