import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { ApiResponse } from '../util/response';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  products : [];
  private baseurl = "http://localhost:3000";
  
  constructor(public auth:AuthenticationService, private http: HttpClient) {
  }
  
  getProducts(){
    return this.http.get<ApiResponse>(this.baseurl + "/products");
  }

  getProduct(prodId){
    return this.http.get<ApiResponse>(this.baseurl + "/products/" + prodId);
  }

  addProduct(product : Product){
    return this.http.post<ApiResponse>(this.baseurl + "/products", product);
  }

  deleteProduct(prodId){
    return this.http.delete<ApiResponse>(this.baseurl + "/products/delete/"+prodId);
  }

  updateProduct(product){
    return this.http.put<ApiResponse>(this.baseurl + "/products/edit-product", product);
  }
}
