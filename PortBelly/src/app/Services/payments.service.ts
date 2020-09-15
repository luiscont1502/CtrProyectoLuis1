import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Payment } from '../models/payment';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  url : string = "http://portbelly.azurewebsites.net/api/Pagos";
  userToken: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  create(p: Payment): Observable<any>{
    p.cln_id=1005;
let categoriasBody = JSON.stringify(p);
    return this.http.post<Payment[]>(this.url, categoriasBody, this.httpOptions);
  }
  list(): Observable<Payment[]>{
    return this.http.get<Payment[]>(this.url,this.httpOptions)
    .pipe(
      retry(1)
    );
  }

  delete(payment: Payment) : Observable<any> {
    return this.http.delete<any>(this.url + '/' + payment.pgo_id,
      this.httpOptions)
      .pipe(
        retry(1)
      );
  }
  retrive(id:number):Observable<Payment>{
    return this.http.get<Payment>(this.url+'/'+id,this.httpOptions)
    .pipe(
      retry(1)
    );
  }
}
