import { inject, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environments';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {



  baseUrl: string = environment.apiUrl;


  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (req.url.startsWith(this.baseUrl + '/todos')) {
      const token = localStorage.getItem("token");
      if (token) {

        const cloned = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });

        return next.handle(cloned).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401 ) {
              console.log("We Have an error")
            }
            return throwError(error);
          })
        );

      }
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }
}
