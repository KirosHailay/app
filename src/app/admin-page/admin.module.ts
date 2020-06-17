import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { UnapprovedProductsComponent } from './unapproved-products/unapproved-products.component';
import { NgModule } from "@angular/core";
import { UnapprovedReviewsComponent } from './unapproved-reviews/unapproved-reviews.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
// import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    // NgbRatingConfig
  ],
  declarations: [
      AdminComponent,
      HeaderComponent,
      UnapprovedProductsComponent,
      UnapprovedReviewsComponent,
      ProductDetailsComponent,
      ReviewDetailsComponent
  ],
  providers: [],
  exports:[      
    AdminComponent,
    HeaderComponent
]

})
export class AdminModule { }
