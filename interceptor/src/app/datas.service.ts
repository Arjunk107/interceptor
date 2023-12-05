import { Injectable } from '@angular/core';
import { DataHandlingInterceptor } from './data-handling.interceptor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  public showdatas(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
