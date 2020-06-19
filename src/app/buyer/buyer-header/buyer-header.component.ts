import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'buyer-header',
  templateUrl: './buyer-header.component.html',
  styleUrls: ['./buyer-header.component.css']
})
export class BuyerHeaderComponent implements OnInit {

  constructor( private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  gotToCart(){
    this.router.navigate(['buyer/cart']);
  }

logout(){
  this.authService.logout();
  this.router.navigate(["login"]);
}
}


