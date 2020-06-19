import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BillingInfo, Address, User } from 'src/app/model';
import { AuthenticationService} from '../../services/authentication.service';
import { from } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  user: any;
  billingInfos: BillingInfo[];
  addresss: Address[]
  placeOrderForm: FormGroup;
  websiteList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com']
  
  changeWebsite(e) {
    console.log(e.target.value);
  }
  constructor(private authenticationService: AuthenticationService, private orderService: OrderService,  private formBuilder: FormBuilder) { 
    this.user =  this.authenticationService.getCurrentUser();
    this.addresss  = this.user.user.shippingAddress;
    this.billingInfos = this.user.user.billingInfo;
    this.placeOrderForm = this.formBuilder.group({
      paymentMethod: ['', Validators.required],
      shippingAddress: ['', Validators.required],
      useCupon: ['', Validators.required],
      cartId: ['1234', Validators.required]
  });
  }

  ngOnInit(): void {
    console.log("the current user is: ",);
    
    console.log('this is billing infos', this.billingInfos[0].cardInfo)
    console.log(this.user.user)
    console.log("this is address: ", this.addresss[0]._id)
  }
  get f(){
    return this.placeOrderForm.controls;
  }
  submit(){
    console.log("I am outputing this... ")
    console.log(this.placeOrderForm.value);
    this.orderService.placeOrder(this.placeOrderForm.value).pipe(first())
      .subscribe(data => {
        if(data.status == 200) {
           console.log('you successfully add an item');
           console.log(data.result)
        }
      })
  }
  
  
}
