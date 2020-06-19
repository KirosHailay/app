import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/auth/login/login.component';
import { LandingpageComponent } from './view/home/landingpage/landingpage.component';
import { SignupComponent } from './view/auth/signup/signup.component';
import { AuthGuard } from './helpers';
import { AddProductComponent } from './product/add-product/add-product.component';
import { DisplayProductComponent } from './product/display-product/display-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { OrderDispalyComponent } from './product/order-dispaly/order-dispaly.component';
import { ChangeOrderComponent } from './product/change-order/change-order.component';
import { OrderHistoryComponent } from './order-history/order-history.component';





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
  {path: 'history' , component: OrderHistoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
