import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavigationComponent } from './product/navigation/navigation.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { DisplayProductComponent } from './product/display-product/display-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { LoginComponent } from './view/auth/login/login.component';
import { LandingpageComponent } from './view/home/landingpage/landingpage.component';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { SignupComponent } from './view/auth/signup/signup.component';
import { AdminComponent } from './admin-page/admin/admin.component';
import { HeaderComponent } from './admin-page/admin/header/header.component';
import { UnapprovedProductsComponent } from './admin-page/admin/unapproved-products/unapproved-products.component';
import { UnapprovedReviewsComponent } from './admin-page/admin/unapproved-reviews/unapproved-reviews.component';
import { ProductDetailsComponent } from './admin-page/admin/product-details/product-details.component';
import { ReviewDetailsComponent } from './admin-page/admin/review-details/review-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingpageComponent,
    SignupComponent,
    ProductComponent,
    NavigationComponent,
    AddProductComponent,
    DisplayProductComponent,
    UpdateProductComponent,
    AdminComponent,
    HeaderComponent,
    UnapprovedProductsComponent,
    UnapprovedReviewsComponent,
    ProductDetailsComponent,
    ReviewDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
