import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User} from '../model';
import { ApiResponse } from '../util/response';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUser: User;
   
    private baseurl = "http://localhost:3000/auth";
    constructor(private http: HttpClient) {
        
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //   console.log("this is the currrent user : ", this.currentUser.shippingAddress)
      
    }

    public getCurrentUser(): User {
        return this.currentUser;
    }

    isUserAuthenticated() {
        return this.currentUser != null;
    }

    activateRequest(userName:string, password:string) {
        return this.http.post<ApiResponse>(this.baseurl + "/signin", {userName, password });
    }
    getProduct() {
        console.log("Sending ", this.baseurl + "/products")
        return this.http.get<ApiResponse>(this.baseurl + "/products");
    }


    login(userName: string, password: string) {
        console.log(userName, password);
          return this.http.post<ApiResponse>(this.baseurl + "/signin", {userName, password })
              .pipe(map(response => {
                  // login successful if there's a jwt token in the response
                  if (response && response.result.token) {
                      // store user details and jwt token in local storage to keep user logged in between page refreshes
                      localStorage.setItem('currentUser', JSON.stringify(response.result));
                      this.currentUser = response.result;
                  }
  
                  return response.result;
              }));
      }
      signup(user: User){
        return this.http.post<ApiResponse>(this.baseurl + "/signup", user);
     }
  

      logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUser = null;
    }
}