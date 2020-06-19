import { Injectable } from '@angular/core';
import { Product, Review} from '../model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponse } from '../util/response';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({providedIn: 'root'})

export class CartService{
    // private product: Product;
    private baseurl = "http://localhost:3000/cart";
    // public subject = new BehaviorSubject<Product>(null);
    // public reviewSubject= new BehaviorSubject<Review>(null);

    constructor(private http:HttpClient){}   

    getCart(){
        console.log("Sending ", this.baseurl)
        return this.http.get<ApiResponse>(this.baseurl);
    }

    addToCart(prodId: string){
        console.log("HERE", prodId);
        return this.http.post<ApiResponse>(this.baseurl + '/add-to-cart', {prodId:prodId});
    }
    getProduct(prodID){
        console.log("SENDING!")
        return this.http.get<ApiResponse>(this.baseurl+ '/'+prodID);
    }

    removeItem(prodId: string){
        console.log("HERE", prodId);
        return this.http.post<ApiResponse>(this.baseurl + '/remove-from-cart', {prodId:prodId});
    }
   
}