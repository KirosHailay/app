import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {
  constructor(private router : Router){}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  goDeleteProduct(){
    this.router.navigate(['seller', 'display-product']);
  }
  goUpdateProduct(){
    
    this.router.navigate(['seller', 'update-products']);
  }
}
