import { Injectable } from '@angular/core';
import { Product, Review} from '../model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponse } from '../util/response';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({providedIn: 'root'})

export class BuyerService{
    // private product: Product;
    private baseurl = "http://localhost:3000/products";
    // public subject = new BehaviorSubject<Product>(null);
    // public reviewSubject= new BehaviorSubject<Review>(null);

    constructor(private http:HttpClient){}   

    getProducts(){
        console.log("Sending ", this.baseurl, "/approved-products")
        return this.http.get<ApiResponse>(this.baseurl+ '/approved-products');
    }

    
}