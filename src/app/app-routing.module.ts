import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/auth/login/login.component';
import { LandingpageComponent } from './view/home/landingpage/landingpage.component';
import { SignupComponent } from './view/auth/signup/signup.component';
import { AuthGuard } from './helpers';
import { AddProductComponent } from './product/add-product/add-product.component';
import { DisplayProductComponent } from './product/display-product/display-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';




const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: 'home', component: LandingpageComponent, canActivate: [AuthGuard] },
  { path: "signup", component: SignupComponent},
  { path: 'seller/add-product', component: AddProductComponent },
  { path: 'seller/display-products', component: DisplayProductComponent },
  { path: 'seller/update-products', component: UpdateProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
