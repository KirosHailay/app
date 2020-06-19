import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/auth/login/login.component';
import { LandingpageComponent } from './view/home/landingpage/landingpage.component';
import { SignupComponent } from './view/auth/signup/signup.component';
import { AuthGuard } from './helpers';
import { AddProductComponent } from './product/add-product/add-product.component';
import { DisplayProductComponent } from './product/display-product/display-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { OrdersComponent} from './view/orders/orders.component';
import { PlaceOrderComponent} from './view/place-order/place-order.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { OrderDispalyComponent } from './product/order-dispaly/order-dispaly.component';
import { ChangeOrderComponent } from './product/change-order/change-order.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AdminComponent} from './admin-page/admin/admin.component';
import { UnapprovedProductsComponent } from './admin-page/admin/unapproved-products/unapproved-products.component';
import { UnapprovedReviewsComponent } from './admin-page/admin/unapproved-reviews/unapproved-reviews.component';
import { ReviewDetailsComponent } from './admin-page/admin/review-details/review-details.component';
import { BuyerComponent } from './buyer/buyer.component';
import{ ProductListComponent} from './buyer/product-list/product-list.component';
import{ CartComponent} from './buyer/cart/cart.component';
import { AddBillingInfoComponent } from './view/add-billing-info/add-billing-info.component';
import { AddShippingAddressComponent } from './view/add-shipping-address/add-shipping-address.component';


const routes: Routes = [
  {path: '' , component: LandingpageComponent},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent},
  { path: 'seller', component: ProductComponent ,
   children :[
  { path: 'add-product', component: AddProductComponent },
  { path: 'display-products', component: DisplayProductComponent },
  { path: 'update-products/:id', component: UpdateProductComponent },
  {path: 'detail/:id', component:ProductDetailsComponent},
  {path:'orders', component:OrderDispalyComponent},
  {path:'order/:id', component: ChangeOrderComponent}
   ]},
 
  { path: 'seller/add-product', component: AddProductComponent },
  { path: 'seller/display-products', component: DisplayProductComponent },
  { path: 'seller/update-products', component: UpdateProductComponent },
  { path: 'orders', component: OrdersComponent},
  {path: 'buyer' , component:BuyerComponent,
children:[
  { path: 'place-order', component: PlaceOrderComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'cart', component: CartComponent}, 
  {path: 'history' , component: OrderHistoryComponent},
  {path: 'billing' , component: AddBillingInfoComponent},
  {path: 'shipping' , component: AddShippingAddressComponent}
]
},
  
 { path: 'admin', component: AdminComponent,
children:[
  { path: 'list-products', component: UnapprovedProductsComponent},
  { path: 'view-product/:id', component: ProductDetailsComponent},
  { path: 'list-reviews', component: UnapprovedReviewsComponent},
  {path: 'view-review/:revId/:prodId', component: ReviewDetailsComponent},
]
}

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 