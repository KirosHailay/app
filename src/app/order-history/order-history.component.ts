import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../model/order';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orders : Order[];
  constructor(private orderService :OrderService) { 
  }

  ngOnInit(): void {
    this.orderService.getOrderHistory().pipe(first()).subscribe(data =>{
      this.orders  = data.result;
      console.log("order is ..." + this.orders)
    })
  }

}
