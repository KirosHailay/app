import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, Address, BillingInfo} from '../model';
import { ApiResponse } from '../util/response';


@Injectable({ providedIn: 'root' })
export class UserService { 

    private baseUrl = 'http://localhost:3000/user';
    constructor(private http: HttpClient) {
        
    }

    // add shipping info model and pass it here as parameter's data type
    addShippingInfo(address: Address) {
        return this.http.post<ApiResponse>(this.baseUrl + "/add-shipping-address", address)
    }

    // add billing info model and pass it here as  parameters's data type
    addBillingInfo(billingInfo: BillingInfo) {
        return this.http.post<ApiResponse>(this.baseUrl + "/add-shipping-info", billingInfo)
    }
}