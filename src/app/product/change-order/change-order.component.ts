import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-change-order',
  templateUrl: './change-order.component.html',
  styleUrls: ['./change-order.component.css']
})
export class ChangeOrderComponent implements OnInit {
  changeOrders : FormGroup;
  id: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private orderService : OrderService , private active : ActivatedRoute) { 
      this.active.params.subscribe( params => { this.id = params['id']})
      this.changeOrders = this.formBuilder.group({
        status : ['']
      })
      console.log('result ----+++ ' , this.changeOrders.value)
    }

  ngOnInit(): void {
   
  }
  changeOrder(){
    console.log("this is .....", this.changeOrders.get('status').value)
this.orderService.changeOrderStatus(this.id, this.changeOrders.get('status').value).pipe(first()).
subscribe(data =>{
  this.router.navigate(['seller','orders']);
})
  }
}
