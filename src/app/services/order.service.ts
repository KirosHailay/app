import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiResponse } from '../util/response';


@Injectable({ providedIn: 'root' })
export class OrderService {
    private baseurl = "http://localhost:3000/orders";

    constructor(private http: HttpClient) {
        
      }

    getOrderHistory(){
        return this.http.get<ApiResponse>(this.baseurl + "/order-history");
    }

    getOrders() {
        return this.http.get<ApiResponse>(this.baseurl )
    }

    // provide post body
    // placeOrder(postOrder: PlaceOrderPost) {
    //     return this.http.post<ApiResponse>(this.baseurl + '/place-order', postOrder);
    // }

    // provide put body
    changeOrderStatus(id,data) {
        console.log("ORDER STAT", data);
        return this.http.put<ApiResponse>(this.baseurl + '/change-order-status', {orderId: id, orderStatus: data});
    }

    cancelOrder(id:string) {
        return this.http.put<ApiResponse>(this.baseurl + '/cancel-order', {orderId: id})
    }

}