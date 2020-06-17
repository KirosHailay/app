import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {AuthenticationService} from '../../../services/authentication.service';

@Component({ templateUrl: 'signup.component.html' })
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.getCurrentUser()) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            userName: ['', Validators.required],
            email: ['', Validators.required],
            role: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.signupForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
     
        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }

        this.loading = true;
        console.log(this.signupForm.value)
        this.authenticationService.signup(this.signupForm.value)
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