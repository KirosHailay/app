import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("JWT INTERCEPTER");
        // add authorization header with jwt token if available
        console.log(request)
        let currentUser = this.authenticationService.getCurrentUser();
        if (currentUser && currentUser.token) {
            
            request = request.clone({
                setHeaders: { 
                    "token": currentUser.token
                }
            });
        }

        return next.handle(request);
    }
}