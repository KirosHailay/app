import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/auth/login/login.component';
import { LandingpageComponent } from './view/home/landingpage/landingpage.component';
import { SignupComponent } from './view/auth/signup/signup.component';
import { AuthGuard } from './helpers';
import { AddProductComponent } from './product/add-product/add-product.component';
import { DisplayProductComponent } from './product/display-product/display-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { AdminComponent} from './admin-page/admin/admin.component';
import { UnapprovedProductsComponent } from './admin-page/admin/unapproved-products/unapproved-products.component';
import { ProductDetailsComponent } from './admin-page/admin/product-details/product-details.component';
import { UnapprovedReviewsComponent } from './admin-page/admin/unapproved-reviews/unapproved-reviews.component';
import { ReviewDetailsComponent } from './admin-page/admin/review-details/review-details.component';
import { BuyerComponent } from './buyer/buyer.component';
import{ ProductListComponent} from './buyer/product-list/product-list.component';
import{ CartComponent} from './buyer/cart/cart.component';




const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: 'home', component: LandingpageComponent, canActivate: [AuthGuard] },
  { path: "signup", component: SignupComponent},
  { path: 'seller/add-product', component: AddProductComponent },
  { path: 'seller/display-products', component: DisplayProductComponent },
  { path: 'seller/update-products', component: UpdateProductComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'admin/list-products', component: UnapprovedProductsComponent},
  { path: 'admin/view-product/:id', component: ProductDetailsComponent},
  // { path: 'admin/approve-product', component: UnapprovedProductsComponent},
  { path: 'admin/list-reviews', component: UnapprovedReviewsComponent},
  {path: 'admin/view-review/:revId/:prodId', component: ReviewDetailsComponent},
  {path: 'buyer/product-list', component: ProductListComponent},
  {path: 'buyer/cart', component: CartComponent}, 


];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 