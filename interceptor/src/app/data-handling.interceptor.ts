import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable()
export class DataHandlingInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Sending');
    console.log(request);

    const token = 'auth-header123'
    console.log("Auth Header Added");
    return next.handle(request.clone({ setHeaders: { 'Auth-headers': token } }))
    // return next.handle(request).pipe(map(response => console.log(response)), catchError((err: any) => {
    //   Observable.throw(err);
    //   console.log(err)
    // })
    // )
  }
}
