import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { first } from 'rxjs/operators';
import { Review } from 'src/app/model';
import { Product } from 'src/app/model';


@Component({
  selector: 'admin-unapproved-reviews',
  templateUrl: './unapproved-reviews.component.html',
  styleUrls: ['./unapproved-reviews.component.css']
})
export class UnapprovedReviewsComponent implements OnInit {
  reviews: Review[];
  product: Product;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  onInput(prodId) {
    this.adminService.getReviews(prodId)
    .pipe(first())
    .subscribe(data => {
      if(data){
        console.log("hello", data.result)
      }
      this.reviews = data.result;
    });   }

approveReview( prodId: number, reviewId: number): void{
  this.adminService.approveReview(prodId, reviewId)
  .subscribe(data => {
    if(data)
    {
      this.reviews = this.reviews.filter(rev => rev !== data.result);
    }    
  })
};



}
