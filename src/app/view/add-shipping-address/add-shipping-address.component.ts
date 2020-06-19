import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-shipping-address',
  templateUrl: './add-shipping-address.component.html',
  styleUrls: ['./add-shipping-address.component.css']
})
export class AddShippingAddressComponent implements OnInit {

  shippingAddressForm: FormGroup;
  loading = false;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  
) {

}
  ngOnInit() {
    this.shippingAddressForm = this.formBuilder.group({
        Country: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipAddress: ['', Validators.required]
    });
}

// convenience getter for easy access to form fields
get f() { return this.shippingAddressForm.controls; }

onSubmit() {
    this.submitted = true;
    // reset alerts on submit
 
    // stop here if form is invalid
    if (this.shippingAddressForm.invalid) {
        return;
    }

    this.loading = true;
    console.log(this.shippingAddressForm.value)
    this.userService.addShippingInfo(this.shippingAddressForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.loading = false;

    
                this.router.navigate(['/login']);
            },
            error => {
                this.loading = false;
            });
}

}
