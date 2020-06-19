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
import { AdminModule } from './admin-page/admin.module';
import { from } from 'rxjs';
import { OrdersComponent } from './view/orders/orders.component';
import { AddShippingAddressComponent } from './view/add-shipping-address/add-shipping-address.component';
import { AddBillingInfoComponent } from './view/add-billing-info/add-billing-info.component';
import { PlaceOrderComponent } from './view/place-order/place-order.component';


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

  ],
  imports: [
    BrowserModule,
    AdminModule,
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
