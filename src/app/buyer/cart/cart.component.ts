import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { from } from 'rxjs';
import { Product } from 'src/app/model';

import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/Cart';

@Component({
  selector: 'buyer-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) {

  }
  cart: Cart;
  // cartItems: CartItem[ 
  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartService.getCart()
      .pipe(first())
      .subscribe(data => {
        if (data) {
          this.cart = data.result;
          console.log("cart...", data.result.items);
          this.cart.items = data.result.items;
          console.log("my new Item....", this.cart.items);
        }
      });
  }

  getProduct(prodId: string): Product {
    this.cartService.getProduct(prodId)
      .pipe(first())
      .subscribe(data => {
        if (data) {
          console.log(data.result);
          return data.result;
        }
      });
    return null;
  }

  removeItem(prodId: string){
    this.cartService.removeItem(prodId)
    .subscribe(data=>{
      if(data){
          this.getCart();
      }
    })
  }


  placeOrder() {
    this.router.navigate(['buyer', 'place-order']);
  }
}
