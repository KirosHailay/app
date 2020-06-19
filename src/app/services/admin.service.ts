import { Injectable } from '@angular/core';
import { Product, Review} from '../model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponse } from '../util/response';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({providedIn: 'root'})

export class AdminService{
    private product: Product;
    private baseurl = "http://localhost:3000/admin";
    public subject = new BehaviorSubject<Product>(null);
    public reviewSubject= new BehaviorSubject<Review>(null);

    constructor(private http:HttpClient){}   

    getProducts(){
        console.log("Sending ", this.baseurl)
        return this.http.get<ApiResponse>(this.baseurl);
    }

    approveProduct(prodId: number){
        console.log(prodId);
        return this.http.put<ApiResponse>(this.baseurl + '/approveProduct', {prodId:prodId});
    }

    viewProductDetail(id: string){
        return this.http.get<ApiResponse>( this.baseurl +"/"+id);
    }

    getReviews(prodId: number){
        console.log("Sending ", this.baseurl)
        return this.http.get<ApiResponse>(this.baseurl + '/unapprovedReviews/'+ prodId);
    }

    approveReview(prodId: number, reviewId: number){
        console.log(prodId,"__", reviewId );
        return this.http.put<ApiResponse>(this.baseurl + '/approveReview', {prodId : prodId, reviewId: reviewId});
    }


    viewReviewDetail(){

    }

    getReview(prodId: string, reviewId: string){
        console.log(prodId,"__", reviewId );
        return this.http.get<ApiResponse>(this.baseurl + '/getReview/'+ reviewId+"/"+prodId);

    }

}