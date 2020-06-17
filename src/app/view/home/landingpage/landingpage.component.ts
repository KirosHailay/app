import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service'

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { 
    console.log("Current user", authenticationService.getCurrentUser());
    console.log("Getting product")
    console.log("Response:", authenticationService.getProduct().subscribe(data => {
      console.log('this is a data : '+ data)
    }));
  }

  ngOnInit(): void {
  }

}
