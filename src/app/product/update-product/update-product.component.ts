import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

constructor(
  private formBuilder: FormBuilder,
  private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        id:['', Validators.required],
        title: ['', Validators.required],
        imageUrl: ['', Validators.required],
        quantity: ['', Validators.required],
        price: ['', [Validators.required]],
        description : ['', [Validators.required]]
    });
}

get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      //this.alertService.clear();

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      // this.userService.register(this.registerForm.value)
      //     .pipe(first())
      //     .subscribe(
      //         data => {
      //             this.alertService.success('Registration successful', true);
      //             this.router.navigate(['/login'], { queryParams: { registered: true }});
      //         },
      //         error => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         });
  }

}
