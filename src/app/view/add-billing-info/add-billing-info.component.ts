import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-billing-info',
  templateUrl: './add-billing-info.component.html',
  styleUrls: ['./add-billing-info.component.css']
})
export class AddBillingInfoComponent implements OnInit {

  billingInfoForm: FormGroup;
  loading = false;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  
) {

}
  ngOnInit() {
    this.billingInfoForm = this.formBuilder.group({
        Country: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipAddress: ['', Validators.required]
    });
}

// convenience getter for easy access to form fields
get f() { return this.billingInfoForm.controls; }

onSubmit() {
    this.submitted = true;
    // reset alerts on submit
 
    // stop here if form is invalid
    if (this.billingInfoForm.invalid) {
        return;
    }

    this.loading = true;
    console.log(this.billingInfoForm.value)
    this.userService.addShippingInfo(this.billingInfoForm.value)
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
