import { Component, OnInit } from '@angular/core';
import { Order } from '../../model/order';
import { OrderService } from '../../services/order.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-dispaly',
  templateUrl: './order-dispaly.component.html',
  styleUrls: ['./order-dispaly.component.css']
})
export class OrderDispalyComponent implements OnInit {
orders : Order[];
  constructor(private orderService :OrderService, private route : Router) { 
  
  }

  ngOnInit(): void {
    this.orderService.getOrders().pipe(first()).subscribe(data =>{
      this.orders  = data.result;
      console.log("order is ..." + this.orders)
    })
  }
  goCancel(id:string){
    this.orderService.cancelOrder(id).pipe(first()).subscribe(data=>{
      console.log("order --- " , data.status)
    })
    window.location.reload();
  }
  
  goChange(id:string){
  this.route.navigate(['seller','order',id]);
  }
}
