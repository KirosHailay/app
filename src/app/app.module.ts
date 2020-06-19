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
import { from } from 'rxjs';
import { OrdersComponent } from './view/orders/orders.component';
import { AddShippingAddressComponent } from './view/add-shipping-address/add-shipping-address.component';
import { AddBillingInfoComponent } from './view/add-billing-info/add-billing-info.component';
import { PlaceOrderComponent } from './view/place-order/place-order.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { OrderDispalyComponent } from './product/order-dispaly/order-dispaly.component';
import { ChangeOrderComponent } from './product/change-order/change-order.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AdminComponent } from './admin-page/admin/admin.component';
import { HeaderComponent } from './admin-page/admin/header/header.component';
import { UnapprovedProductsComponent } from './admin-page/admin/unapproved-products/unapproved-products.component';
import { UnapprovedReviewsComponent } from './admin-page/admin/unapproved-reviews/unapproved-reviews.component';
import { ProductDetailsComponents } from './admin-page/admin/product-details/product-details.component';
import { ReviewDetailsComponent } from './admin-page/admin/review-details/review-details.component';
import { BuyerComponent } from './buyer/buyer.component';
import { ProductListComponent } from './buyer/product-list/product-list.component';
import { BuyerHeaderComponent } from './buyer/buyer-header/buyer-header.component';
import { CartComponent } from './buyer/cart/cart.component';
import { ProductsDetailsComponent } from './buyer/product-details/product-details.component';


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
    OrdersComponent,
    AddShippingAddressComponent,
    AddBillingInfoComponent,
    PlaceOrderComponent,
    ProductDetailsComponent,
    OrderDispalyComponent,
    ChangeOrderComponent,
    OrderHistoryComponent,
    AdminComponent,
    HeaderComponent,
    UnapprovedProductsComponent,
    UnapprovedReviewsComponent,
    ProductDetailsComponent,
    ReviewDetailsComponent,
    BuyerComponent,
    ProductListComponent,
    BuyerHeaderComponent,
    CartComponent,
    ProductsDetailsComponent,
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
