import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/services/buyer.service';
import { Product } from 'src/app/model';
import { first } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'buyer-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private buyerService: BuyerService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.getProds();

  }
  getProds(){
    this.buyerService.getProducts()
    .pipe(first())
    .subscribe(data => {
      if(data){
        console.log("hello", data.result)
      }
      this.products = data.result;
    });
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

  goToDetail(){
    this.router.navigate(['buyer/prodDetails']);
  }
}
