import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Promocion } from '../models/promocion';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PromocionService {
  url = 'https://localhost:44330/api/Promocion';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  create(promocion: Promocion): Observable<any> {
    const categoriasBody = JSON.stringify(promocion);
    if (promocion.prm_id === undefined){
      return this.http.post<any>(this.url, categoriasBody, this.httpOptions).pipe(retry(1));
    }
    return this.http.put<any>(this.url, categoriasBody, this.httpOptions).pipe(retry(1));
  }
  list(): Observable<Promocion[]>{
    return this.http.get<Promocion[]>(this.url, this.httpOptions)
    .pipe(
      retry(1)
    );
  }
  retrive(id: number): Observable<Promocion>{
    return this.http.get<Promocion>(this.url + '/' + id, this.httpOptions)
    .pipe(
      retry(1)
    );
  }
  delete(promocion: Promocion): Observable<any> {
    return this.http.delete<any>(this.url + '/' + promocion.prm_id,
      this.httpOptions).pipe(retry(1));
  }

}
