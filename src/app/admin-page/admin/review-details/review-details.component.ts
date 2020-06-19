import { Component, OnInit } from '@angular/core';
import { Review, Product } from 'src/app/model';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
// import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'admin-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css'],
  // providers: [NgbRatingConfig]
})
export class ReviewDetailsComponent implements OnInit {
  product: Product;
  review: Review;
  private prodId: string;
  private reviewId: string;
  // constructor(config: NgbRatingConfig) { 
  constructor(private adminService: AdminService, private route: ActivatedRoute, private router: Router) { 
    // config.max = 5;
    // config.readonly = true;
    route.params.subscribe(params =>
      { 
        this.reviewId = params['revId'];
        this.prodId= params['prodId'];
      })
  }

  ngOnInit(): void {
    
    this.adminService.viewProductDetail(this.prodId).pipe(first()).subscribe(data => {
      if(data.status === 200) {
          this.product = data.result;
          console.log("GOT THE PROD");
      }
      else{
        console.log("Error");
      }
    });
    this.adminService.getReview(this.prodId,this.reviewId).pipe(first()).subscribe(data => {
      if(data.status === 200) {
          this.review = data.result;
          console.log("GOT THE rev");
      }
      else{
        console.log("Error");
      }
    });
  }

  approveReview( prodId: number, reviewId: number): void{
    this.adminService.approveReview(prodId, reviewId)
    .subscribe(data => {
      if(data)
      {
        // this.reviews = this.reviews.filter(rev => rev !== data.result);
        console.log("hey")
      this.router.navigate(['admin/list-reviews']);
      }    
    })
  };
}

