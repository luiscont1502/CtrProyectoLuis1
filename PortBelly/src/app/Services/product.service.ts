import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url : string = "https://localhost:44330/api/Producto";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  constructor(private http:HttpClient) { }
  list(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }
  delete(a: Product) : Observable<any> {
    return this.http.delete<Product[]>(this.url + '/' + a.prd_id,
      this.httpOptions);
  }

  view(p: Product): Observable<Product[]>{
    return this.http.get<Product[]>(this.url + '/' + p.prd_id, this.httpOptions)
    .pipe(
      retry(1)
    );
  }
  create(p: Product): Observable<any>{
    return this.http.post<Product[]>(this.url, p, this.httpOptions);
  }
  retrive(id:number):Observable<Product>{
    return this.http.get<Product>(this.url+'/'+id,this.httpOptions)
    .pipe(
      retry(1)
    );
  }
  update(p: Product): Observable<any>{
    const alumnoBody = JSON.stringify(p);
    console.log(p);
    return this.http.put<any>(this.url, p, this.httpOptions);
  }

}
