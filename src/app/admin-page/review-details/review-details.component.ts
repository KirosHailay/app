import { Component, OnInit } from '@angular/core';
// import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'admin-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css'],
  // providers: [NgbRatingConfig]
})
export class ReviewDetailsComponent implements OnInit {

  // constructor(config: NgbRatingConfig) { 
  constructor() { 
    
    // config.max = 5;
    // config.readonly = true;
  }

  ngOnInit(): void {
  }

}

