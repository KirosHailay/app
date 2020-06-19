import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService , private route : Router) { 
    console.log("Current user", authenticationService.getCurrentUser());
    console.log("Getting product")
    console.log("Response:", authenticationService.getProduct().subscribe(data => {
      console.log('this is a data : '+ data)
    }));
  }

  ngOnInit(): void {
  }
  goLogIn(){
this.route.navigate(['login']);
  }
  goSignUp(){
    this.route.navigate(['signup']);
  }
}
