import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buyer-prod-detail',
  templateUrl: './buyer-prod-detail.component.html',
  styleUrls: ['./buyer-prod-detail.component.css']
})
export class BuyerProdDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToCart(){
    window.alert("You have successfully added this item to cart");
    this.router.navigate(['buyer/cart']);
  }

}



// import { Component, OnInit } from '@angular/core';
// import { Product } from 'src/app/model/product';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder } from '@angular/forms';
// // import { ProductService } from 'src/app/services/product.service';
// import { first } from 'rxjs/operators';

// @Component({
//   selector: 'app-product-details',
//   templateUrl: './product-details.component.html',
//   styleUrls: ['./product-details.component.css']
// })
// export class BuyerProdDetailComponent implements OnInit {
// product : Product;
// id: any;
//   constructor(private formBuilder: FormBuilder,
//     private router: Router,
//     private route: ActivatedRoute ,
//     // private productService: ProductService
//     ) { 
//     //   route.params.subscribe( params => { this.id = params['id']});
//     // this.productService.getProduct(this.id).pipe(first()).subscribe(data =>{ 
//     //   console.log("status.....", data.status)
//     //  this.product = data.result;
//     // })
//   }

//   ngOnInit(): void {
//   }

// }
